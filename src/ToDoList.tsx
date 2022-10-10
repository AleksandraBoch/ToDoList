import React, {useState} from "react";
import {FilterValueType} from "./App";

// @ts-ignore
type PropsType={
    title:string
    tasks:Array<TaskType>
    removeTask:(taskId:string)=>void
    changeFilter(value: FilterValueType):void
    addTask:(title:string)=>void

}


type TaskType={
    id:string
    title:string
    isDone:boolean

}



export  function ToDoList(props:PropsType) {

    let [title, setTitle]=useState('')
return(    <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title} onChange={(event)=>{
                setTitle(event.currentTarget.value)
            }}/>
            <button onClick={()=> props.addTask(title)}>+</button>
        </div>
        <ul>
            {props.tasks.map((task)=>{
                return(

                    <li key={task.id}>
                        <input type= 'checkbox' checked={task.isDone}/>
                        <span>{task.title}</span>
                    <button onClick={()=>{props.removeTask(task.id)}}>x</button>
                    </li>
                )
            })}

        </ul>
        <div>
            <button onClick={()=>{props.changeFilter('All')}}>All</button>
            <button onClick={()=>{props.changeFilter('Active')}}>Active</button>
            <button onClick={()=>{props.changeFilter('Completed')}}>Completed</button>
        </div>
    </div>
)
}