import React from 'react'
import { data } from '../data';
import { Icon } from '@iconify/react';
import BoardTitle from './BoardTitle';
import { IconButton } from '@material-tailwind/react';

interface IProps { status: string; icon: string }

const TaskBoard = ({ status, icon }: IProps) => {
    return (
        <div className="bg-secondary-10 rounded-md shadow-md min-h-[28rem]">
            <BoardTitle status={status} icon={icon} />
            <ul className="p-3 space-y-3">
                {data.filter((i, index)=> i.status === status).map((item, idx) => (
                    <li key={item.id} className="border border-secondary-20 bg-white rounded-md shadow-md p-3 cursor-move flex justify-between gap-4">

                        <article className="space-y-2 w-full">
                            {item.id}
                            <p className="text-md text-primary-100 font-semibold">
                                Task Title
                            </p>
                            <p className="text-sm text-gray-600 text-justify">Discription</p>
                            <p className="text-sm text-gray-500">Date</p>
                        </article>

                        <div className="w-[3rem] flex gap-2 flex-col items-center">
                            <span>{icon}</span>
                            <IconButton className="p-0 bg-secondary-20 rounded-full h-[1.8rem] w-[1.8rem]">
                                <Icon icon="bx:edit" color="blue" width={16} height={16} />
                            </IconButton>
                            <IconButton className="p-0 bg-secondary-20 rounded-full h-[1.8rem] w-[1.8rem]">
                                <Icon icon="typcn:delete" color="red" width={24} height={24} />
                            </IconButton>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskBoard