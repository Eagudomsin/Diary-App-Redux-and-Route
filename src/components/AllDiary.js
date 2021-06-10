import { useSelector } from 'react-redux';
import Diary from './Diary'
import classes from '../style.module.css'

const AllDiary = () => {
    const diary = useSelector(state => state.mydiary.storage)
    const alldiary = diary.map((state) => {
        return <Diary key={state.id} id={state.id} title={state.title} date={state.date} diary={state.diary} />
    })

    return (
        <div className={classes.main}>
            <h1>All Diary</h1>
            <div>{(diary.length === 0) ? <h4>No diary remaining.</h4>:alldiary}</div>
        </div>
    )
}

export default AllDiary