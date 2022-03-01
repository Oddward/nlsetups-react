import { configureStore } from '@reduxjs/toolkit'
import tracksSlice from './tracksSlice'


const store = configureStore({
    tracks: tracksSlice
})

export default store