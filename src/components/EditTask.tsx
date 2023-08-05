import moment from 'moment';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import CustomInput from './forms/CustomInput';
import { editTodo } from '../services/appSlice';
import { ITaskTypes } from '../interface/intex';
import { useAppDispatch } from '../services/hooks';
import CustomDatePicker from './forms/CustomDatePicker';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, IconButton, } from "@material-tailwind/react";

interface IProps { todo: ITaskTypes; id: string };

const EditTask = ({ todo, id }: IProps) => {
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open);

    const [title, setTitle] = useState<string | undefined>(todo.title);
    const [description, setDescription] = useState<string | undefined>(todo.description);
    const [startDate, setStartDate] = useState<Date | string>(new Date());
    const dueDate = moment(startDate).format('DD-MM-YYYY');

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title) return alert('Please enter task title');
        let payload = { ...todo, id, title, dueDate, description }
        dispatch(editTodo(payload));
        handleOpen()
    }

    return (
        <>
            <IconButton onClick={handleOpen} className="p-0 bg-secondary-20 rounded-full h-[1.8rem] w-[1.8rem]">
                <Icon icon="bx:edit" color="blue" width={16} height={16} />
            </IconButton>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader className='border-b border-secondary-20'>Edit the Task!</DialogHeader>

                <DialogBody>
                    <form className="flex gap-4 flex-col" onSubmit={handleSubmit}>
                        <div className="flex gap-4 items-center justify-between">
                            <CustomDatePicker className='!rounded-md !border-secondary-20 !text-gray-700' onChange={(date) => setStartDate(date)} selected={startDate} />
                            <CustomInput
                                value={title}
                                divStyle='w-[20rem]'
                                placeholder='Create Task'
                                className="border-secondary-20 focus:border-gray-600"
                                onChange={(e) => setTitle(() => e.target.value)}
                            />
                        </div>

                        <textarea
                            cols={4}
                            rows={5}
                            value={description}
                            placeholder="Edit Discription!"
                            className='input__style border-secondary-20'
                            onChange={(e) => setDescription(() => e.target.value)}
                        />

                        <DialogFooter className='border-t border-secondary-20'>
                            <Button variant="text" color="red" onClick={handleOpen} className="mr-1" >
                                <span>Cancel</span>
                            </Button>
                            <Button className='!bg-primary-100' type='submit'> Confirm </Button>
                        </DialogFooter>
                    </form>
                </DialogBody>
            </Dialog>
        </>
    );
}

export default EditTask