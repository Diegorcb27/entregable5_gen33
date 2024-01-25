import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

const trainer = useSelector(states => states.trainer)



if(trainer.length >= 3){
    return <Outlet/>   //accede a los componentes hijos luego de colocar los nombres
} else {
 return <Navigate to="/"/>
}

  
}

export default ProtectedRoutes