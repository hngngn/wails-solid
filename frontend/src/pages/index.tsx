import { createSignal } from "solid-js"
import { Greet } from "@wails/go/backend/App"

const Home = () => {
    const [value, setValue] = createSignal("")
    const [greeting, setGreeting] = createSignal("")

    const handleGreeting = async (e: Event) => {
        e.preventDefault()
        const data = await Greet(value())
        setGreeting(data)
        setValue("")
    }

    return (
        <div class="flex items-center justify-center min-h-screen">
            <form class="flex flex-col gap-4 w-18em" onSubmit={handleGreeting}>
                <p class="text-center font-700 text-3xl">Solid with Wails</p>
                <p class="font-500 text-center">{greeting() || "Please enter your name!"}</p>
                <input
                    autofocus
                    type="text"
                    value={value()}
                    onInput={(e) => setValue(e.currentTarget.value)}
                    class="p-2 ring ring-gray-3 rounded-xl outline-none px-4"
                />
            </form>
        </div>
    )
}

export default Home
