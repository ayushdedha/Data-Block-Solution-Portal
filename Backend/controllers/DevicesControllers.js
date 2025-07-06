import { DevicesModels } from '../models/DevicesModels.js'
import { getDevicesLogic, postDevicesLogic, deleteDevicesLogic } from '../services/DevicesServices.js'

//get device
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
        return res.status(500).json({success:false,message:"Internal Server Error!!"});
    }
}

//post device
export const postDevices = async(req,res)=>{
    const { device_name, os, mac_address, ip_address } = req.body;
    
    if(!device_name || !mac_address || !ip_address){
        return res.status(400).json({success:false,message:"All fields required"});
    }
    
    const deviceData = new DevicesModels({device_name, os,  mac_address, ip_address});
    
    try {
        const response = await postDevicesLogic(deviceData);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

//delete device
export const deleteDevices = async(req,res)=>{
    const {id} =req.params;    

    if(!id){
        return res.status(400).json({success:false,message:"Id required"});
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
        return res.status(500).json({success:false,message:"Internal Server error"});
    }
}