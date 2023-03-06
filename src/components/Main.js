import react from "react"
import './style.css'

export default function Main() {
    return (
        <main>
            <h1>Fun facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li>React has several characteristics of a framework</li>
                <li>Virtual DOM is Faster Than Real DOM</li>
                <li>React has a Strong Community</li>
                <li>Is maintained by Facebook</li>
            </ul>
        </main>
    )
}