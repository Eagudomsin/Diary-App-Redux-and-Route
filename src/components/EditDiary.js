import { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { myAction } from '../store/mySlice'
import Backdrop from './Backdrop'
import Button from './Button'
import classes from '../style.module.css'

const titleReducer = (state,action) => {
    if(action.title === "") {
        return {title: action.title, titleIsvalid: false}
    } else {
        return {title: action.title, titleIsvalid: true}
    }
}

const dateReducer = (state,action) => {
    if(action.date === "") {
        return {date: action.date, dateIsvalid: false}
    } else {
        return {date: action.date, dateIsvalid: true}
    }
}

const diaryReducer = (state,action) => {
    if(action.diary === "") {
        return {diary: action.diary, diaryIsvalid: false}
    } else {
        return {diary: action.diary, diaryIsvalid: true}
    }
}

const EditDiary = (props) => {
    const trueDate = useSelector(state => state.mydiary.storage[props.id].trueDate)
    const dispatch = useDispatch()
    const [titleState, titleDispatch] = useReducer(titleReducer, {title: props.title, titleIsValid: true})
    const [dateState, dateDispatch] = useReducer(dateReducer, {date: trueDate, dateIsValid: true})
    const [diaryState, diaryDispatch] = useReducer(diaryReducer, {diary: props.diary, diaryIsValid: true})

    const checkTitleIsValid = (event) => {
        titleDispatch({title: event.target.value})
    }

    const checkDateIsValid = (event) => {
        dateDispatch({date: event.target.value})
    }

    const checkDiaryIsValid = (event) => {
        diaryDispatch({diary: event.target.value})
    }
    
    const editDiaryHandler = (event) => {
        event.preventDefault()
        dispatch(myAction.editDiary({id: props.id, title: titleState.title, date: dateState.date, diary: diaryState.diary}))
        props.close()
    }

    const allIsvalid = !(titleState.titleIsvalid || dateState.dateIsvalid || diaryState.diaryIsvalid)

    return (
        <Backdrop >
            <div className={classes.main}>
                <h1>EDIT DIARY</h1>
                <form name="edit" onSubmit={editDiaryHandler} className={classes.form}>
                    <div className={classes.input_container}>
                        <label>Title:</label>
                        <input value={titleState.title} onChange={checkTitleIsValid} className={classes.input}/>
                    </div>
                    <div className={classes.input_container}>
                        <label>Date:</label>
                        <input type="date" value={dateState.date} onChange={checkDateIsValid} className={classes.input}/>
                    </div>
                    <div className={classes.input_container}>
                        <label>Diary:</label>
                        <textarea value={diaryState.diary} onChange={checkDiaryIsValid} rows='10' className={classes.input}/>
                    </div>
                    <div className={classes.btn_container}>
                        <Button type='submit' disabled={allIsvalid}>EDIT DIARY</Button>
                        <Button onClick={props.close}>CANCEL</Button>
                    </div>
                </form>
            </div>
        </Backdrop>
    )
}

export default EditDiary