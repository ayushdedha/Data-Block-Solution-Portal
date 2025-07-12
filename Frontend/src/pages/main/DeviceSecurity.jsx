import { useState, useEffect } from 'react'
import AddGroups from '../../modals/AddGroups.jsx'
import API from '../../util/Api.js'
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '../../modals/Edit.jsx';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {Navigate, useNavigate} from 'react-router-dom'

const DeviceSecurity = () => {
  let [ openAddGroupModal, setOpenAddGroupModal ] = useState(false);
  let [tableData, setTableData] = useState([]);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [selectedData, setSelectedData] = useState({});

  let navigate = useNavigate();

  let fetchData = async()=>{
    try {
      let response = await API.get(`http://localhost:3000/api/group/groupDetails`);
      setTableData(response.data.data);
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData();
  },[]);

  let deleteData = async(id)=>{
    try {
        let response = await API.delete(`http://localhost:3000/api/group/groupDetails/${id}`);
        
        fetchData();
    } catch (error) {
        console.log(error);
    }
  }

  let handleEdit = (data)=>{
    setOpenEditModal(true);
    setSelectedData(data);
  }
  
  let handleDevices = ()=>{
    navigate('/devices');
  };

  let handlePolicy = ()=>{
    navigate('/policy');
  }

  return (
    <div className='grow  border-6'>
      <div className='w-90vw h-[50px]'>
        <button className='absolute top-2 right-5 bg-gray-400 text-white hover:bg-white hover:text-black' onClick={()=>setOpenAddGroupModal(true)}>Add User</button>
      </div>
      <div className='p-4'>
        <table className='border-black'>
          <thead>
            <tr className='bg-cyan-100'>
              <th>Group ID</th>
              <th>Group Name</th>
              <th>Devices</th>
              <th>Policy</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
           {tableData.map((data,index)=>(
              <tr key={data.groupId}>
                <td>{data.groupId}</td>
                <td>{data.name}</td>
                <td><button className='!p-1 !w-[150px] bg-blue-600 text-white hover:bg-white hover:text-black m-2 ml-4 mr-4' onClick={handleDevices}>Manage Devices</button></td>
                <td><button className='!p-1 !w-[150px] bg-green-600 text-white hover:bg-white hover:text-black m-2 ml-4 mr-4' onClick={handlePolicy}>Manage Policy</button></td>
                <td><ModeEditIcon className='cursor-pointer text-green-600 m-4' onClick={()=>handleEdit(data)}/></td>
                <td><DeleteIcon className='cursor-pointer text-red-600 m-4' onClick={()=>deleteData(data.groupId)}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openAddGroupModal && <AddGroups setOpenAddGroupModal ={setOpenAddGroupModal} fetchData={fetchData}/>}
      {openEditModal && <Edit setOpenEditModal ={setOpenEditModal} 
      selectedData = {selectedData} fetchData={fetchData}/>}
    </div>
  )
}

export default DeviceSecurity