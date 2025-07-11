import { NavLink, useNavigate} from 'react-router-dom'

const NavigationBar = () => {

  let navigate = useNavigate();

  let handleLogout = ()=>{
    sessionStorage.clear();
    navigate('/login');
  }

  return (
    <div className='h-screen w-[240px] flex flex-col gap-15 items-center border-r-2 bg-black text-white'>
      <h2 className='mt-8 font-bold text-2xl'>DBS-Portal</h2>
      <ul className='grow flex flex-col '>
        <NavLink to={'/device-security'}><li className='border-l-2 border-t-2 border-gray-500 w-[240px] p-4 text-white'>Device Security</li></NavLink>
        <NavLink to={'/devices'}><li className='border-2 border-gray-500 w-[240px] p-4 text-white'>Devices</li></NavLink>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default NavigationBar