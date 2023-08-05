import moment from 'moment';
import React, { useState } from 'react';
import { uuid } from '../../utility/randomID';
import CustomInput from '../forms/CustomInput';
import { Button } from '@material-tailwind/react';
import CustomDatePicker from '../forms/CustomDatePicker';
import { addTodo, setTodos } from '../../services/appSlice';
import { useAppDispatch, useAppSelector } from '../../services/hooks';

const CreateTask = () => {
    const dispatch = useAppDispatch()
    const { todo } = useAppSelector((state) => state.app);

    const [taskTitle, setTaskTitle] = useState<string | undefined>('');
    const [startDate, setStartDate] = useState<Date | string>(new Date());
    const formatDate = moment(startDate).format('DD-MM-YYYY');

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!taskTitle) return alert('Please enter task title');
        dispatch(addTodo({ ...todo, id: uuid(), title: taskTitle, dueDate: formatDate }));
        dispatch(setTodos());
        setTaskTitle(() => '');
        setStartDate(new Date());
    }

    return (
        <div className='flex flex-col items-center gap-3'>
            <h2 className="text-primary-100 font-semibold text-lg py-4">Create Your Task</h2>

            <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
                <div className="flex gap-4 items-center">
                    <CustomInput
                        value={taskTitle}
                        divStyle='w-[20rem]'
                        placeholder='Create Task'
                        className="!rounded-full"
                        onChange={(e) => setTaskTitle(() => e.target.value)}
                    />

                    <CustomDatePicker onChange={(date) => setStartDate(date)} selected={startDate} />
                </div>
                <Button type='submit' className='text-lg bg-primary-100 rounded-full'>Create</Button>
            </form>
        </div>
    )
}

export default CreateTask