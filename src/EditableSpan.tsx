import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType={
    title:string
    changeTitle:(newTitle:string)=>void
}

export const EditableSpan=(props:EditableSpanPropsType)=>{
    const [title, setTitle] = useState<string>(props.title)
        const [isEditMode,setIsEditMode] = useState<boolean>(false)
    const onEditMode=()=>{
            setIsEditMode(true)

    }

    const onChangeSetLocalTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const offEditMode=()=>{
            setIsEditMode(false)
        props.changeTitle(title)

    }
    return(
        isEditMode
        ?<input
            value={props.title}
            autoFocus
            onBlur={offEditMode}
            onChange={onChangeSetLocalTitle}
            />
       : <span onDoubleClick={onEditMode}></span>

    )


}