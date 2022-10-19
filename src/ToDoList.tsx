import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItem/AddItem";
//rsc
type TodoListPropsType = {
    todoListId: string
    title: string
    tasks: Array<TaskType>
    filter: FilterValuesType
    removeTask: (taskId: string, todoListId: string) => void
    changeTodoListFilter: (filter: FilterValuesType, todoListId: string) => void
    addTask: (title: string, todoListId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todoListId: string) => void
    removeTodoList: (todoListId: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}


const TodoList = (props: TodoListPropsType) => {
    const addTask = (title:string) => {
        props.addTask(title,props.todoListId)
    }

    const getTasksListItem = (t: TaskType )=> {
        const removeTask = () => props.removeTask(t.id, props.todoListId)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>)=>props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListId)
        return (
            <li key={t.id} className={t.isDone ? "isDone" : "notIsDone"}>
                <input
                    onChange={changeTaskStatus}
                    type={"checkbox"}
                    checked={t.isDone}
                />
                <span>{t.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    }
    const tasksList = props.tasks.length
        ? <ul>{props.tasks.map(getTasksListItem)}</ul>
        : <span>Your taskslist is empty :(</span>

    const handlerCreator = (filter: FilterValuesType) => () => props.changeTodoListFilter(filter, props.todoListId)

    const removeTodoList = () => props.removeTodoList(props.todoListId)

    return (
        <div>
            <h3>
                {props.title}
                <button onClick={removeTodoList}>x</button>
            </h3>
            <div>
              <AddItemForm addItem={addTask}/>
            </div>
                {tasksList}
            <div>
                <button
                    className={props.filter === "all" ? "active-btn btn": "btn"}
                    onClick={handlerCreator("all")}
                >All</button>
                <button
                    className={props.filter === "active" ? "active-btn btn": "btn"}
                    onClick={handlerCreator("active")}
                >Active</button>
                <button
                    className={props.filter === "completed" ? "active-btn": "btn"}
                    onClick={handlerCreator("completed")}
                >Completed</button>
            </div>
        </div>
    );
};

export default TodoList;