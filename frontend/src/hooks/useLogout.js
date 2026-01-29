import { useAuthContext } from './useAuthContext'
import {useWorkoutsContext} from './useWorkoutsContext'

const useLogout = () => {
    const { dispatch } = useAuthContext()
    const {dispatch: workoutsDispatch} = useWorkoutsContext()

    const logout = () => {
        // remove user from local storage
        localStorage.removeItem('userData')

        // dispatch logout action
        dispatch({type: 'LOGOUT'})
        
        // clear the global workouts state on logout to avoid flashing previous user's workouts
        workoutsDispatch({type: 'SET_WORKOUTS', payload: null})
    }

    return { logout }
}

export default useLogout