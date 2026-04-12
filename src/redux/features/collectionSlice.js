import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const initialState ={
    items:JSON.parse(localStorage.getItem('collection')) || []
}
const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
        addCollection:(state,action)=>{
            const alreadyExist = state.items.find(
                item => item.id === action.payload.id
            )
            if(!alreadyExist){
                state.items.push(action.payload)
                localStorage.setItem('collection',JSON.stringify(state.items))
                console.log('saved in local')
            }
        },
        removeCollection:(state,action)=>{
            state.items = state.items.filter(
                item => item.ud !== action.payload
            )
            localStorage.setItem('collection',JSON.stringify(state.items))

        },
        clearCollection:(state)=>{
            state.item = []
            localStorage.removeItem('collection')
        }, 
        addedToast:()=>{
            toast('Added To Collection', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast:()=>{
            toast.error('Removed From Collection', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
}            );
        }
    }
})

export const{
    addCollection,
    removeCollection,
    clearCollection,
    addedToast,
    removeToast
} = collectionSlice.actions
export default collectionSlice.reducer