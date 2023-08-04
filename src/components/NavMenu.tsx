import React from 'react'
import { NavLink } from 'react-router-dom';

const NavMenu = () => {

    return (
        <div className='bg-secondary-20 py-3'>
            <div className="container mx-auto flex items-center justify-between">
                <NavLink to="/">
                    <img src='/image/code_rex.png' alt="logo" className='rounded-lg' height={54} width={100} />
                </NavLink>

                <ul className="flex gap-4 items-center">
                    <li className="relative px-4">
                        <NavLink className={`nav__after text-[12px] sm:text-base text-primary-50`} to="/">Home</NavLink>
                    </li>
                    <li className="relative px-4">
                        <NavLink className={`nav__after text-[12px] sm:text-base text-primary-50`} to="/task">Task</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu