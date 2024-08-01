import React from 'react'
import { sliceLoggedUserRole } from '../../store/switcher-slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

export const useLoggedUserRole = () => {

    const dispatch = useAppDispatch()
    const roleLogged = useAppSelector((state) => state.ui.loggedUserRole)

    const onLoggedUserRole = (loggedUserRole: string) => {
        // When an user is logged in or out, this function will change the global state of logged
        console.log("User ROLE: " + loggedUserRole)
        dispatch(sliceLoggedUserRole(loggedUserRole))
    }

    return {
        roleLogged,
        onLoggedUserRole
    }
}
