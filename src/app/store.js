import { configureStore } from "@reduxjs/toolkit";
import typeReducer from '../features/types/typeSlice'
import menuReducer from "../features/menu/menuSlice";
import quantitiesReducer from "../features/quantities/quantitiesSlice";

export default configureStore({
    reducer: {
        types: typeReducer,
        menu: menuReducer,
        quantities: quantitiesReducer,
    }
})