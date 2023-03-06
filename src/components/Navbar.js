import React from "react"
import reactLogo from "../images/react-icon.png"
import './style.css'

export default function Navbar() {
    return (
        <nav>
            <img src={reactLogo} width="60px"/>
            <h3 className="nav--logo_title">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}