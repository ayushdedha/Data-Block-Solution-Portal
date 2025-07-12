import {useState} from 'react'
import API from '../util/Api';


const Edit = ({setOpenEditModal, selectedData, fetchData}) => {
    let [name , setName] = useState(selectedData.name);

    let handleForm = async(e)=>{
      e.preventDefault();
      try {
        let response = await API.put(`http://localhost:3000/api/group/groupDetails/${selectedData.groupId}`,{name});
        setOpenEditModal(false);
        fetchData();
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='fixed w-screen h-screen top-0 left-0 flex justify-center items-center bg-[#0000003a]' onClick={() => setOpenEditModal(false)}>
        <div className='bg-white p-4 rounded-md p-4 border-2 border-black' onClick={(e)=>e.stopPropagation()}>
            <form onSubmit={handleForm}>
                <h3 className='p-2 mb-2 font-semibold text-[20px]'>Let's Edit a field</h3>
                <input type="text" name="name" id="name" placeholder='name' className='p-2 border rounded mr-2' value={name} onChange={(e)=> setName(e.target.value)} required/>
                <button className='!p-2 !w-[100px] bg-blue-400 text-white hover:bg-white hover:text-black'>Edit</button>
            </form>
        </div>
    </div>
  )
}

export default Edit