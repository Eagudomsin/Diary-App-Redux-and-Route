import { useRef, useState } from 'react'
import { useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { myAction } from '../store/mySlice'
import Button from './Button'

import classes from '../style.module.css'

let count = 0

const AddDiaryForm = () => {
    const [titleIsValid, setTitleIsValid] = useState(false)
    const [dateIsValid, setDateIsValid] = useState(false)
    const [diaryIsValid, setDiaryIsValid] = useState(false)
    const dispatch = useDispatch()
    const titleRef = useRef()
    const dateRef = useRef()
    const diaryRef = useRef()

    const titleIsValidHandler = () => {
        if(titleRef.current.value !== "") {
            setTitleIsValid(true)
        } else {
            setTitleIsValid(false)
        }
    }

    const dateIsValidHandler = () => {
        if(dateRef.current.value !== "") {
            setDateIsValid(true)
        } else {
            setDateIsValid(false)
        }
    }

    const diaryIsValidHandler = () => {
        if(diaryRef.current.value !== "") {
            setDiaryIsValid(true)
        } else {
            setDiaryIsValid(false)
        }
    }

    const addDiaryHandler = (event) => {
        event.preventDefault()

        dispatch(myAction.addDiary({id: count, title: titleRef.current.value, date: dateRef.current.value, diary: diaryRef.current.value }))
        setTitleIsValid(false)
        setDiaryIsValid(false)
        titleRef.current.value = ""
        diaryRef.current.value = ""
        count++
    }

    return (
        <div className={classes.main}>
            <h1>ADD DIARY</h1>
            <form name="add" onSubmit={addDiaryHandler} className={classes.form}>
                <div className={classes.input_container}>
                    <label>Title:</label>
                    <input ref={titleRef} onChange={titleIsValidHandler} onBlur={titleIsValidHandler} className={classes.input} />
                </div>
                <div className={classes.input_container}>
                    <label>Date:</label>
                    <input ref={dateRef} onChange={dateIsValidHandler} onBlur={dateIsValidHandler} type="date" className={classes.input}  />
                </div>
                <div className={classes.input_container}>
                    <label>Diary:</label>
                    <textarea ref={diaryRef} onChange={diaryIsValidHandler} onBlur={diaryIsValidHandler} rows='10' className={classes.input} />
                </div>
                <Button type='submit' disabled={(!titleIsValid || !dateIsValid || !diaryIsValid)}>ADD DIARY</Button>
            </form>
        </div>
    )
}

export default AddDiaryForm