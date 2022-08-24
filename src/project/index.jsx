import { useState } from "react"
import "./styles.css"
import { TaskComponent } from "./task-component"
import useLocalStorage from "./useLocalStorage"

export const Project = () => {

    const [todo, setTodo] = useLocalStorage("value", [])
    const [tasksName, setTasksName] = useState('')
    const [hide, setHide] = useState(false)
    const [targetValue, setTargetValue] = useState(0)

    const handleChange = (e) => {
        setTargetValue(e.target.value)
        setTasksName((prev) => {
            return {
                ...prev,
                id: Math.random(),
                value: e.target.value,
                isCompleted: false,
            }
        })
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        setTasksName("")
        setTargetValue(0)
        setTodo((prev) => {
            return [
                ...prev,
                tasksName,
            ]
        })
    }

    const handleId = (task) => {
        if (task.isCompleted === false) {
            task.isCompleted = true

        } else { task.isCompleted = false }
    }

    const onClose = () => {
        setHide(!hide)
    }

    return (
        <div className="page-wrapper">

            {(todo.length === 0 ? false : true) && < div className="hide-block">
                <input type="checkbox" onClick={() => onClose()} />
                <label  > Hide completed</label>
            </div>}

            <div className=" input-block">
                <label >Task</label>
                <form onSubmit={onSubmit}>
                    <input
                        onChange={handleChange}
                        placeholder="Write here" type="text" />
                    <button disabled={(tasksName.value === "" || tasksName === "" || targetValue.length >= 54) ? true : false}> Add </button>
                </form>
                {(targetValue.length >= 54) && <p className="invalid">Task content can contain max 54 characters.</p>}
                <div className=" tasks-wrapper ">
                    {todo.map((task) => {
                        return <TaskComponent
                            task={task}
                            setTodo={setTodo}
                            key={task.id}
                            onClose={onClose}
                            handleId={handleId}
                            hide={hide}
                        />
                    })}
                </div>
            </div>

            {(todo.length === 0 ? true : false) &&
                (<div className="text-block">
                    <p className="text1"> Your life is a blanck page. You write on it.</p>
                    <p className="text2" >So start by adding your tasks here</p>
                </div >)}
        </div >
    )
}
