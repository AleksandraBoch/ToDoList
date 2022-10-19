import React, {ChangeEvent, KeyboardEvent, useState} from "react";

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
    <input
        value={title}
        onChange={onChangeSetLocalItem}
        onKeyDown={onEnterDownAddItem}
        className={error ? "error" : ""}

    />
    <button onClick={addItem}>+</button>
    {errorMessage}
</div>

)
}