import { useState } from 'react'
import API from '../util/Api';

const AddGroups = ({setOpenAddGroupModal, fetchData}) => {
  let [name, setName] = useState('');

  let handleForm = async(e)=>{
    e.preventDefault();
    try {
      let response = await API.post(`http://localhost:3000/api/group/groupDetails`,{name});

      setOpenAddGroupModal(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-[#0000003a]' onClick={()=>setOpenAddGroupModal(false)}>
      <div className="bg-white p-4 rounded-md p-6 border-2 border-black" onClick={(e)=>e.stopPropagation()}>
        <form onSubmit={handleForm}>
          <h2 className='p-2 mb-2 font-semibold text-[20px]'>Let's add a group</h2>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Group name' className='p-1.5 border-black' required/>
          <button className='!p-2 !w-[100px] bg-blue-400 text-white hover:bg-white hover:text-black'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddGroups