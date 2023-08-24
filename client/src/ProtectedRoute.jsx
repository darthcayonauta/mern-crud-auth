import { useAuth } from "./context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
//Oulet es el componente que está dentro


function ProtectedRoute() {

  const {loading, user, isAuthenticated} =useAuth()
  console.log(loading, isAuthenticated);

  if(loading) return <h1>Loading ...</h1>

  if(!isAuthenticated && !isAuthenticated) return <Navigate to='/login' replace></Navigate>

  return (
    <Outlet />
  )
}

export default ProtectedRoute