import React, {useState, KeyboardEvent, ChangeEvent} from 'react';
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItem/AddItem";
import {EditableSpan} from "./EditableSpan";
import {Button, ButtonGroup, Checkbox, IconButton, List, ListItem, Typography} from "@material-ui/core";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
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
    changeTaskTitle:(taskId:string,title:string,todoListId:string)=>void
    changeTodoListTitle:(title:string,todoListId:string)=>void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList = (props: TodoListPropsType) => {

    const getTasksListItem = (t: TaskType )=> {
        const removeTask = () => props.removeTask(t.id, props.todoListId)
        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>)=>props.changeTaskStatus(t.id, e.currentTarget.checked, props.todoListId)
        const changeTaskTitle=(title:string)=>{
            props.changeTaskTitle (t.id,title,props.todoListId)
        }

        return (
            <ListItem
                key={t.id}
                style={{padding:'0px',justifyContent:"space-between",textDecoration:t.isDone ?'line-through':'none'}}
                className={t.isDone ? "isDone" : "notIsDone"}>
                <Checkbox
                    onChange={changeTaskStatus}
                    color={'primary'}
                    size={'small'}
                    checked={t.isDone}
                />



                />
                {/*<span></span>*/}
                <EditableSpan title={t.title} changeTitle={changeTaskTitle}/>
                <IconButton onClick={removeTask}
                size={'small'}>
                    <DeleteTwoToneIcon/>;
                </IconButton>
            </ListItem>
        )
    }
    const tasksList = props.tasks.length
        ? <List>{props.tasks.map(getTasksListItem)}</List>
        : <span>Your taskslist is empty :(</span>

const changeTodoListTitle=(title:string)=>props.changeTodoListTitle(title,props.todoListId)
    const addTask = (title:string) => {
        props.addTask(title,props.todoListId)
    }

    const handlerCreator = (filter: FilterValuesType) => () => props.changeTodoListFilter(filter, props.todoListId)

    const removeTodoList = () => props.removeTodoList(props.todoListId)

    return (
        <div style={{width:'300px'}}>
            <Typography
            variant={'h5'}
            align={'center'}
            style={{fontWeight:'bold'}}

            >

                <EditableSpan title={props.title} changeTitle={changeTodoListTitle}/>
                {/*<button onClick={removeTodoList}>x</button>*/}
                <IconButton onClick={removeTodoList}
                            size={'small'}>
                    <DeleteTwoToneIcon/>;
                </IconButton>
            </Typography>
            <div>
              <AddItemForm addItem={addTask}/>
            </div>
                {tasksList}
            <div>
                <ButtonGroup

                    variant={'contained'}
                    size={'small'}

                style={{marginRight:'3px'}}
                >
                <Button

                    color={props.filter === "all" ?'secondary':"primary"}
                    onClick={handlerCreator("all")}
                >All

                </Button>


                <Button

                    color={props.filter === "active" ?'secondary':"primary"}
                    onClick={handlerCreator("active")}
                >Active
                </Button>

                <Button
                    color={props.filter === "completed" ?'secondary':"primary"}
                    onClick={handlerCreator("completed")}
                >Completed
                </Button>
                </ButtonGroup>


            </div>
        </div>
    );
};

export default TodoList;