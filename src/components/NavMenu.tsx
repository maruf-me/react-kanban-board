import React from 'react'
import { Link } from 'react-router-dom';

const NavMenu = () => {

    return (
        <div className='bg-secondary-20 py-3 '>
            <div className="container mx-auto flex items-center justify-between text-black">
                <Link to="/">
                    <img src='/image/code_rex.png' alt="logo" className='rounded-lg' height={54} width={100} />
                </Link>

                <div className="flex gap-4 items-center">
                    <Link className="Nav__Link nav__after" to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/task">Task</Link>
                </div>

            </div>
        </div>
    )
}

export default NavMenu