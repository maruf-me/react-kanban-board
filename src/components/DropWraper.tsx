import React from 'react';
import { useDrop } from 'react-dnd';
import { statuses } from '../data';

const DropWrapper = ({ onDrop, children, status }) => {
    const [{ isOver }, drop] = useDrop({
        accept: 'todo',
        canDrop: (item, monitor) => {
            const itemIndex = statuses.findIndex(si => si.status === item.status);
            const statusIndex = statuses.findIndex(si => si.status === status);
            return [itemIndex + 1, itemIndex - 1, itemIndex].includes(statusIndex);
        },
        drop: (item, monitor) => {
            onDrop(item, monitor, status);
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <ul ref={drop} className="p-3 space-y-3">
            {React.cloneElement(children, { isOver })}
        </ul>
    )
}

export default DropWrapper