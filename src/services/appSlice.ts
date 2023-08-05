import { uuid } from "../utility/randomID";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState, ITaskTypes } from "../interface/intex";

const initialState: IInitialState = {
    date: new Date().toISOString().slice(0, 10),
    statuses: [],
    todos: [{
        id: uuid(),
        status: "open",
        dueDate: '2021-10-10',
        title: "Frontend Developer",
        description: 'Edit the Driscription',
    }],
    todo: {
        id: '',
        title: '',
        dueDate: '',
        status: "open",
        description: '',
    },
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITaskTypes>) => { state.todo = action.payload },
        setTodos: (state) => { state.todos = [...state.todos, state.todo] },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action: PayloadAction<ITaskTypes>) => {
            let { id, title, dueDate, description } = action.payload
            let oldTodo = state.todos.filter(todo => todo.id !== id)
            let updatedTodo = state.todos.filter(todo => todo.id === id);
            state.todos = [...oldTodo, { ...updatedTodo[0], title, dueDate, description }]

        },
        setDropTodos: (state, action: PayloadAction<ITaskTypes[]>) => {
            state.todos = action.payload;
        },
    }
})

export const { addTodo, setTodos, removeTodo, editTodo, setDropTodos } = appSlice.actions;
export default appSlice.reducer;