import {FilterValuesType, TodoListType} from "../App";


type RemoveTodoListAT={
    type:'REMOVE-TODOLIST'
    todoListId:string,
}

type AddTodolistAT={
    todoListId: string;
    type:'ADD-TODOLIST',
    title:string
    
}

type ChangeTodolistFilterAT={
    type:'CHANGE-TODOLIST-FILTER'
    filter:FilterValuesType
    todolistId:string
}

type ChangeTodolistTitleAT={
    type:'CHANGE-TODOLIST-TITLE',
    todolistId:string,
    title:string
}


type ActionType = RemoveTodoListAT |AddTodolistAT |ChangeTodolistFilterAT | ChangeTodolistTitleAT


export const todoListsReducer = (todoLists: Array<TodoListType>,action:ActionType):
    Array<TodoListType> => {

    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todoLists.filter((tl=>tl.id!==action.todoListId))

        case 'ADD-TODOLIST':
            const newTodoList:TodoListType={
                id:action.todoListId,
                title:action.title,
                filter:'all'
            }
return [...todoLists,newTodoList]

        case 'CHANGE-TODOLIST-FILTER':
            return todoLists.map(tl=>tl.id===action.todolistId ?{...tl,filter:action.filter}:tl)

        case 'CHANGE-TODOLIST-TITLE':
            return todoLists.map(tl=>tl.id===action.todolistId ?{...tl,title:action.title}:tl)
        default:
            return todoLists
    }


}

// export const RemoveTodoListAC=(id:string ):RemoveTodoListAT=>{type:"REMOVE-TODOLIST"}
