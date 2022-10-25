import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddCircleOutlineOutlined} from "@material-ui/icons";

type AddItemPropsType = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: AddItemPropsType) => {
    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const onEnterDownAddItem = (e: KeyboardEvent<HTMLInputElement>)=> e.key === "Enter" && addItem()
    const onChangeSetLocalItem = (e: ChangeEvent<HTMLInputElement>) => {
        error && setError(false)
        setTitle(e.currentTarget.value)
    }


    const addItem = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle !== "") {
            props.addItem(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle("")
    }



    const errorMessage = error ?
        <div style={{fontWeight: "bold", color: "hotpink"}}>
            Title is required!</div> : null

return(
    <div>

       <TextField
           size={'small'}
           variant={'outlined'}
           value={title}
           onChange={onChangeSetLocalItem}
           onKeyDown={onEnterDownAddItem}
           label={'Title'}
           error={error}
           helperText={error&&'Title is required'}

       />



    <IconButton onClick={addItem}>
        <AddCircleOutlineOutlined/>

    </IconButton>

        {/*{errorMessage}*/}
</div>

//

)
}