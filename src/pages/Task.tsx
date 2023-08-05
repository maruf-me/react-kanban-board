import React from 'react';
import { statuses } from '../data';
import Dashboard from '../layouts/Dashboard';
import TaskBoard from '../components/TaskBoard';
import CreateTask from '../components/common/CreateTask';

const Task = () => {
    return (
        <Dashboard>
            <div className="container mx-auto min-h-[93vh] py-2 space-y-6">
                <CreateTask />

                <div className="bg-secondary-20 pb-4 space-y-4">
                    <h3 className="text-xl text-primary-100 font-semibold py-4 px-4 text-center border-b border-secondary-10">Task Board</h3>

                    <div className="grid  md:grid-cols-3 gap-4 px-3">
                        {statuses.map((s, index) => (
                            <TaskBoard key={index} status={s.status} icon={s.icon} />
                        ))}
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Task