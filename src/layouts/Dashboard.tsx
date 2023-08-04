import React from 'react'
import NavMenu from '../components/NavMenu'

interface IProps { children: React.ReactNode }

const Dashboard = ({ children }: IProps) => {
    return (
        <main className="bg-secondary-10 min-h-screen">
            <NavMenu />

            <div>{children}</div>
        </main>
    )
}

export default Dashboard