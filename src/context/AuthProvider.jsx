import { useState, useEffect, createContext } from "react"
import { useNavigate } from "react-router-dom"
import axiosClient from "../config/axiosClient"
const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [ auth, setAuth] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
        const authenticateUser =async()=>{
            const token = localStorage.getItem('token')
            if(!token){
                setLoading(false)
                return
            }
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`

                }
            }
            try {
                const {data} = await axiosClient('/usuarios/perfil', config)
                setAuth(data)
                navigate("/mainhub")
            } catch (error) {
                console.error(error)
            }
           setLoading(false)
        }
        authenticateUser()
        
    },[])

  return (
    <AuthContext.Provider value={
        {
            setAuth,
            auth,
            loading
        }
  }>
    {children}
    </AuthContext.Provider>
    )
}

export {
     AuthProvider
     }
export default AuthContext
