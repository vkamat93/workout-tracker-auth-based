import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email, password) => {
        setIsLoading(true)
        setError(null) // evrytime we call signup, reset error

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const userData = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(userData.error)
        }
        if (response.ok) {
            // save user to local storage
            localStorage.setItem('userData', JSON.stringify(userData))

            // update auth context with dispatch action LOGIN
            dispatch({type: 'LOGIN', payload: userData})
            setIsLoading(false)
        }
    }

    return {signup, isLoading, error}
}