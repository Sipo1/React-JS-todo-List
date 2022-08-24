import { Button, Modal, ModalFooter, ModalHeader } from "reactstrap"

export const DeleteModal = ({ onClose, task, setTodo }) => {

    const handleClick = (task) => {

        setTodo((prev) => {
            return prev.filter((item) => {
                return item.id !== task.id
            })
        })
    }
    return (
        <Modal isOpen={true}
            toggle={onClose}
        >
            <ModalHeader toggle={onClose} >
                Are you sure you want to delete? </ModalHeader>
            <ModalFooter>
                <div className="modal-btn">

                    <Button
                        color="danger"
                        onClick={() => handleClick(task)}
                    >
                        Yes
                    </Button>
                    {" "}
                    <Button
                        color="primary"
                        onClick={onClose}
                    >
                        No
                    </Button>
                </div>

            </ModalFooter>
        </Modal>
    )
}