import { getPolicyLogic, updatePolicyLogic } from "../services/PolicyServices.js"
import { PolicyModels } from '../models/PolicyModels.js'

//get policy
export const getPolicy = async(req,res)=>{
    try {
        let response = await getPolicyLogic();
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

//update policy
export const updatePolicy = async(req,res)=>{
    const policyId = req.params.id;
    const {print,usb,mtp,bluetooth,file_upload,clipboard,app_blacklisting} = req.body;

    const policyData = new PolicyModels({print,usb,mtp,bluetooth,file_upload,clipboard,app_blacklisting});
    if(!policyId){
        return res.status(400).json({success:false,message:"Id not found"});
    }

    try {
        let response = await updatePolicyLogic(policyId,policyData);
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