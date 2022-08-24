import { useState } from "react"
import { DeleteModal } from "../modal"
import "./styles.css"

export const TaskComponent = ({ task, setTodo, handleId, hide }) => {

    const [isShowDeleteModal, setIsShowDeleteModal] = useState()

    return (
        <div className={(!!hide && task.isCompleted === true) ? "close-section" : "task-tools"}>
            <div className="value">
            <input type="checkbox" onChange={() => handleId(task)} />
            <p >{task.value}</p>
            </div>
                <div className="delete">
                <p onClick={() => setIsShowDeleteModal(true)} className="delete-btn" >X</p>
                </div>
            {isShowDeleteModal && (<DeleteModal task={task} setTodo={setTodo} onClose={() => setIsShowDeleteModal(false)} />)}

        </div>
    )
}

