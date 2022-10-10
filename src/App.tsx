import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type FilterValueType= 'All'|'Active'|'Completed'

function App() {

    let [tasks, setTasks] = useState( [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        {id:v1(), title: "Rest API", isDone:false},
        {id:v1(),title: "GraphQL",isDone: false},
    ])

function addTask (title:string){
        let task={id:v1(),title:title,isDone:false};
        let newTasks=[task,... tasks];
        setTasks(newTasks)

}
    function removeTask(id:string){
        let filteredTasks=tasks.filter(task=>task.id===id)
        setTasks(filteredTasks)
    }


    let [filter,setFilter]=useState <FilterValueType>('All')
    let tasksForToDoList=tasks
    if (filter==='Active'){
        tasksForToDoList=tasks.filter(task=>!task.isDone)
    }

    if(filter==='Completed'){
        tasksForToDoList=tasks.filter(task=>task.isDone)
    }
function changeFilter (value:FilterValueType){
        setFilter(value)
}
    return (
        <div className="App">
            <ToDoList
                title="What to learn"
              tasks={tasksForToDoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}


export default App;
