import { createSlice } from '@reduxjs/toolkit'

const initialState = {storage: [] }

const mySlice = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        addDiary(state,action) {
            const time = new Date(action.payload.date)
            const year = time.getFullYear()
            const month = time.getMonth()
            const date = time.getDate()
            const day = time.getDay()
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            state.storage.push({id: action.payload.id, title: action.payload.title, date: `${year}-${months[month]}-${date} (${days[day]})` , diary: action.payload.diary, trueDate: action.payload.date})
        },
        deleteDiary(state,action) {
            state.storage = state.storage.filter(
                (parameter) => { return (parameter.id !== action.payload)}
            )
        },
        editDiary(state,action) {
            const editIndex = state.storage.findIndex(
                (parameter) => { return (parameter.id === action.payload.id)}
            )
            state.storage[editIndex].title = action.payload.title
            state.storage[editIndex].date = action.payload.date
            state.storage[editIndex].diary = action.payload.diary
        }
    }
})

export const myAction = mySlice.actions
export default mySlice.reducer