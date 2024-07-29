import React from 'react'
import { sliceAddUserLogged } from '../../store/switcher-slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export const useLogged = () => {
    const dispatch = useAppDispatch()
    const logged = useAppSelector((state) => state.ui.userLogged)

    const onLoggedInOut = () => {
        // When an user is logged in or out, this function will change the global state of logged
        dispatch(sliceAddUserLogged())
    }
    return {
        logged,
        onLoggedInOut
    }
}
