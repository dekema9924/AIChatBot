
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    value: {
        id: string;
        name: string;
        image: string;
    };
    isLoading: boolean;
}
const initialState: UserState = {
    value: {
        id: "",
        name: "",
        image: "",
    },
    isLoading: true,
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.value = initialState.value;
            state.isLoading = true;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        }

    },
})

export const { login, logout, setLoading } = userSlice.actions;
export default userSlice.reducer;