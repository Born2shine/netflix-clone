import { createSlice } from "@reduxjs/toolkit";

const slugSlice = createSlice({
    name: 'slug',
    initialState: {
        winSize: 0,
        grid: 2,
        showNav: false,
        showProfile: false,
        isModalOpen: false
    },
    reducers:{
        updateSize(state){
            state.winSize = window.innerWidth
            if(state.winSize >= 540){
                state.grid = 2
            }
            if(state.winSize >= 740){
                state.grid = 3
            }
            if(state.winSize === 1200){
                 state.grid = 2
            }
            if(state.winSize > 900){
                state.grid = 4
            }
        },
        setNavbar(state){
            state.showNav = !state.showNav
            state.showProfile = false
        },
        setProfile(state){
            state.showProfile = !state.showProfile
            state.showNav = false
        },
        closeNavbar(state){
            state.showNav = false          
        },
        showMovieModal(state){
            state.isModalOpen = !state.isModalOpen
        }
    }
})

export const slugAction = slugSlice.actions
export default slugSlice