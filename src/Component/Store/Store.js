import React from "react";
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './../Slicers/CounterSlice'
import PropertiesSlice from './../Slicers/PropertiesSlice'

export const store = configureStore({
    reducer: {
        properties: PropertiesSlice,
    },
})