import { createSlice } from "@reduxjs/toolkit";
import Pro from '../componenet/Products.json'
const initialState ={
    tasksList : [Pro.products]
}
const TasksSlice = createSlice({
    name : "tasksSlice",
    initialState,
    reducers:{

    }

})

export default TasksSlice.reducer