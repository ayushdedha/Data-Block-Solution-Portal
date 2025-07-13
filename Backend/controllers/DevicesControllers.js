import { getDevicesLogic, deleteDevicesLogic } from '../services/DevicesServices.js'

export const getDevices = async(req,res)=>{
    try {
        let response = await getDevicesLogic();
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error!"});
    }
}

export const deleteDevices = async(req,res)=>{
    const {id} = req.params;

    if(!id){
        return res.status(400).json({success:false,message:"DeviceId required!"});
    }

    try {
        const response = await deleteDevicesLogic(id);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal Server Error!"});
    }
}