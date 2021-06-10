import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { myAction } from '../store/mySlice'
import Confirmation from './Confirmation'
import Button from './Button'
import classes from '../style.module.css'
import EditDiary from './EditDiary'

const Diary = (props) => {
    const [deleting, setDeleting] = useState(false)
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch()

    const deletingHandler = () => {
        setDeleting(true)
    }

    const cancelDeletingHandler = () => {
        setDeleting(false)
    }

    const deleteDiaryHandler = () => {
        dispatch(myAction.deleteDiary(props.id))
        setDeleting(false)
    }

    const editingHandler = () => {
        setEditing(true)
    }

    const cancelEditing = () => {
        setEditing(false)
    }

    return (
        <div className={classes.diary}>
            <h3>{props.title}</h3>
            <h4>{props.date}</h4>
            <p>{props.diary}</p>
            <div className={classes.btn_container}>
                <Button onClick={editingHandler}>EDIT DIARY</Button>
                <Button onClick={deletingHandler}>DELETE DIARY</Button>
            </div>
            {deleting && <Confirmation title="Will you delete this diary?" confirm={deleteDiaryHandler} cancel={cancelDeletingHandler} />}
            {editing && <EditDiary id={props.id} title={props.title} date={props.date} diary={props.diary} close={cancelEditing}/>}
        </div>
    )
}

export default Diary