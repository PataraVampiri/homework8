import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const navItems = [
        {
            label: 'Home',
            to: '/'
        }  
    ]

    return (
        <header>
            <ul>
                {navItems.map((item) => (
                    <li key={item.to}>
                        <Link to={item.to}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}