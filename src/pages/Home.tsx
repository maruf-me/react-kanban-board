import React from 'react'
import Dashboard from '../layouts/Dashboard'
import { useGetData } from '../hooks/useAppData'

const Home = () => {
    const { data, isLoading } = useGetData('get-post'); 

    console.log("data-----------", data)

    return (
        <Dashboard>
            <div className="flex items-center justify-center h-[80vh]">
                {isLoading ? <h1>Loading...</h1> :
                    <h1 className="text-primary-100 text-xl sm:text-4xl font-bold">
                        Welcome to Devschapy
                    </h1>
                }
            </div>
        </Dashboard>
    )
}

export default Home