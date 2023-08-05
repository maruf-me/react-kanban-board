import React from 'react'
import EditTask from './EditTask';
import { useDrag } from 'react-dnd';
import { Icon } from '@iconify/react';
import { ITaskTypes } from "../interface/intex";
import { removeTodo } from '../services/appSlice';
import { useAppDispatch } from '../services/hooks';
import { IconButton } from '@material-tailwind/react';

interface IProps { todo: ITaskTypes; icon: string }

const TaskCard = ({ todo, icon }: IProps) => {
    const dispatch = useAppDispatch();

    const [{ isDragging }, drag] = useDrag({
        type: 'item',
        item: { id: todo.id },
        collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
    })

    return (
        <>
            <li ref={drag} key={todo.id} className={`${isDragging ? 'opacity-20 border-dashed' : 'bg-white'} border border-secondary-20 rounded-md shadow-md p-3 cursor-move flex justify-between gap-4`}>

                <article className="space-y-2 w-full">
                    <p className="text-md text-primary-100 font-semibold">
                        {todo.title}
                    </p>
                    <p className="text-sm text-gray-600 text-justify">{todo.description}</p>
                    <p className="text-sm text-gray-500">{todo.dueDate as string}</p>
                </article>

                <div className="w-[3rem] flex gap-2 flex-col items-center">
                    <span>{icon}</span>
                    <EditTask todo={todo} id={todo.id as string} />
                    <IconButton onClick={() => dispatch(removeTodo(todo.id as string))} className="p-0 bg-secondary-20 rounded-full h-[1.8rem] w-[1.8rem]">
                        <Icon icon="typcn:delete" color="red" width={24} height={24} />
                    </IconButton>
                </div>
            </li>
        </>
    )
}

export default TaskCard