import React from 'react'
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import BoardTitle from './BoardTitle';
import { setDropTodos } from '../services/appSlice';
import { useAppDispatch, useAppSelector } from '../services/hooks';

interface IProps { status: string; icon: string }

const TaskBoard = ({ status, icon }: IProps) => {
    const dispatch = useAppDispatch();
    const { todos } = useAppSelector((state) => state.app);

    const [{ isOver }, drop] = useDrop({
        accept: 'item',
        drop: (item) => moveItem(item, status),
        collect: (monitor) => ({ isOver: monitor.isOver() }),
    });
    const moveItem = (item, newStatus) => {
        const updatedItems = todos.map((oldItem) =>
            oldItem.id === item.id ? { ...oldItem, status: newStatus } : oldItem
        );
        dispatch(setDropTodos(updatedItems));
    };

    return (
        <div ref={drop} className={`${isOver? 'bg-gray-200 border-2 border-white': 'bg-secondary-10 border border-gray-200'} rounded-md shadow-md min-h-[24rem] duration-300`}>
            <BoardTitle status={status} icon={icon} />
            <ul className="p-3 space-y-3">
                {todos.filter((i, index) => i.status === status).map((item, idx) => (
                    <TaskCard key={item.id} todo={item} icon={icon} />
                ))}
            </ul>
        </div>
    )
}

export default TaskBoard