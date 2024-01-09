import { useState } from 'preact/hooks'

type GreetingProps = {  messages: string[] }

const Greeting =({ messages }: GreetingProps)=> {
    const randomMessage = () =>
        messages[Math.floor(Math.random() * messages.length)]

    const [greeting, setGreeting] = useState(messages[0])

    return (
        <>
            <h3>{greeting}! Thank you for visiting!</h3>
            <button onClick={() => setGreeting(randomMessage())}>
                New Greeting
            </button>
        </>
    )
}

export default  Greeting
