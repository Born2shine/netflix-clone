import { slugAction } from "./slugs-slice"


export const setWindowSize = () => (dispatch) => dispatch(slugAction.updateSize())

export const toggleMovieModal = () => (dispatch) => dispatch(slugAction.showMovieModal())

export const toggleMenuBar = () => (dispatch) => dispatch(slugAction.setNavbar())

export const toggleProfileHandler = () => (dispatch) => dispatch(slugAction.setProfile())

export const closeNavbarHandler = () => (dispatch) => dispatch(slugAction.closeNavbar())