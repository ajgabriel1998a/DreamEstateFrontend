import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    properties: [],
    error: '',
}

export const fetchProperties = createAsyncThunk('property/fetchProperties', () => {
    return axios
    .get("https://dreamestatebackendapi.azurewebsites.net/api/Properties/Get").then((response) => response.data)
})

const PropertiesSlice = createSlice({
    name:'properties',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProperties.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchProperties.fulfilled, (state, action) =>{
            state.loading = false
            state.properties = action.payload
            state.error = ''
        })
        builder.addCase(fetchProperties.rejected, (state,action) =>{
            state.loading = false
            state.properties = []
            state.error = action.error.message
        })
    }
})

export default PropertiesSlice.reducer