import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async(userData,{rejectWithValue}) =>{
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/login`,userData)
            return res.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "Login failed"
            )
        }
    }
)

const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        role:null,
        loading:false,
        error:null
    },
    reducers:{
        logout: (state) =>{
            state.user = null
            state.role = null
        }
    },
    extraReducers:(builder) =>{
        builder
        .addCase(loginUser.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(loginUser.fulfilled,(state,action)=>{
            state.loading = false
            state.user = action.payload.user
            state.role = action.payload.role
        })
        .addCase(loginUser.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export const {logout} = authSlice.actions
export default authSlice.reducer