import './App.css'
import {Routes, Route, useLocation} from 'react-router-dom' // jitni bhi import statement same package se h unhe ek saath likhde
import Login from './pages/authentication/Login.jsx'
import Policy from './pages/main/policy/Policy.jsx'
import Devices from './pages/main/Devices.jsx'
import DeviceSecurity from './pages/main/DeviceSecurity.jsx'
import NavigationBar from './components/NavigationBar.jsx'

function App() {
  const location = useLocation();
  const hideNavigationBar = ['/','/login'];

  return (
    <>
      {!hideNavigationBar.includes(location.pathname) && <NavigationBar/>}

      <Routes>
        {/* Authentication routes */}
        <Route path='/' element={<Login />}/>
        <Route path='/login' element={<Login />}/>

        {/* main pages routes */}
        <Route path='/policy' element={<Policy />}/>
        <Route path='/devices' element={<Devices />}/>
        <Route path='/device-security' element={<DeviceSecurity />}/>
      </Routes>
    </>
  )
}

export default App