import React from 'react'
import TaskCard from './TaskCard';
import BoardTitle from './BoardTitle';
import { setDropTodos } from '../services/appSlice';
import { useAppDispatch, useAppSelector } from '../services/hooks';
import { useDrop } from 'react-dnd';

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
        <div ref={drop} className="bg-secondary-10 rounded-md shadow-md min-h-[28rem]">
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