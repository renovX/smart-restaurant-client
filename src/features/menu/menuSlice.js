import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const GET_URL = process.env.REACT_APP_BACKEND + '/diner/get-foods'

const initialState = {
    menu: {},
    status: 'idle',
    error: null
}

export const addMenuItems = createAsyncThunk('menu/addMenu', async (type) => {
    try {
        const res = await fetch(`${GET_URL}/${type}`)
        const data = await res.json()
        return [type, data]
    }
    catch (err) {
        return err
    }
})

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addMenuItems.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(addMenuItems.fulfilled, (state, action) => {
                state.status = 'succeeded'
                const [type, data] = action.payload
                state.menu[type] = data
            })
            .addCase(addMenuItems.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error
            })
    }
})

export default menuSlice.reducer

export const selectMenu = state => state.menu.menu
