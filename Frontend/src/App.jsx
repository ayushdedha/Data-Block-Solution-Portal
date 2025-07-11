import './App.css'
import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import Login from './pages/authentication/Login.jsx'
import Policy from './pages/main/policy/Policy.jsx'
import Devices from './pages/main/Devices.jsx'
import DeviceSecurity from './pages/main/DeviceSecurity.jsx'
import NavigationBar from './components/NavigationBar.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'

function App() {
  const location = useLocation();
  const hideNavigationBar = ['/','/login'];

  let isAuthenticated = sessionStorage.getItem('isAuthenticated');
  

  return (
    <>
      {!hideNavigationBar.includes(location.pathname) && <NavigationBar/>}

      <Routes>
        {/* Authentication routes */}
        <Route path='/' element={isAuthenticated==='true'? <Navigate to={'/device-security'}/>:<Login />}/>
        <Route path='/login' element={isAuthenticated==='true'? <Navigate to={'/device-security'}/>:<Login />}/>

        {/* main pages routes */}
        <Route element={<ProtectedRoutes/>}>
          <Route path='/policy' element={<Policy />}/>
          <Route path='/devices' element={<Devices />}/>
          <Route path='/device-security' element={<DeviceSecurity />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App