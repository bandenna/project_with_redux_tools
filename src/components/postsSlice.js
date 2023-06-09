import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: "Learning Redux Toolkit", content: "Explored about Redux" },
    { id: 2, title: "slices.....", content: "concepts in Redux tool kit" },

]
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const { postAdded } = postsSlice.actions
export default postsSlice.reducer
