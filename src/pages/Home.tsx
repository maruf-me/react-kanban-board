import React from 'react'
import Dashboard from '../layouts/Dashboard'

const Home = () => {
    return (
        <Dashboard>
            <div className="flex items-center justify-center h-[80vh]">
                <h1 className="text-primary-100 text-4xl font-bold">
                    Welcome to CodeRex
                </h1>
            </div>
        </Dashboard>
    )
}

export default Home