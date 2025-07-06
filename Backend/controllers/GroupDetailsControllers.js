import { GroupDetailsModels } from "../models/GroupDetailsModels.js";
import { getGroupDetailsLogic, postGroupDetailsLogic, updateGroupDetailsLogic , deleteGroupDetailsLogic } from "../services/GroupDetailsServices.js";


//get group
export const getGroupDetails = async(req,res)=>{
    try {
        let response = await getGroupDetailsLogic();
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

//post group
export const postGroupDetails = async(req,res)=>{
    const { name } = req.body;
    
    if(!name){
        return res.status(400).json({success:false,message:"All fields required"});
    }
    
    const groupData = new GroupDetailsModels({name});
    
    try {
        const response = await postGroupDetailsLogic(groupData);
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

//put group
export const updateGroupDetails = async(req,res)=>{
    const groupId = req.params.id;
    const {name} = req.body;

    const groupData = new GroupDetailsModels({name});

    if(!groupId){
        return res.status(400).json({success:false,message:"Id not found"});
    }
    
    try {
        let response = await updateGroupDetailsLogic(groupId,groupData);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status:false,message:"Internal server error!"});
    }
}

//delete group
export const deleteGroupDetails = async(req,res)=>{
    const {id} =req.params;    

    if(!id){
        return res.status(400).json({success:false,message:"Id required"});
    }

    try {
        const response = await deleteGroupDetailsLogic(id);
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