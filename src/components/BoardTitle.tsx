import React from 'react'

interface IProps { status: string; icon: string }

const BoardTitle = ({ status, icon }: IProps) => {
    return (
        <h1 className={`${status === 'open' ? 'bg-blue-100': '' || status === 'done' ? 'bg-green-100' : 'bg-yellow-100'} flex items-center gap-3 justify-center py-3 px-3 text-primary-100 font-semibold border-b border-primary-50 rounded-t-md`}>
            {status.toUpperCase()}
            <span>{icon}</span>
        </h1>
    )
}

export default BoardTitle