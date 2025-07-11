import { getPolicyLogic, updatePolicyLogic } from "../services/PolicyServices.js"
import { PolicyModels } from '../models/PolicyModels.js'

export const getPolicy = async (req, res)=>{
    try {
        let response = await getPolicyLogic();
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({success: false, message: "Internal Server Error!"});
    }
}

export const updatePolicy = async(req,res)=>{
    const policyId = req.params.id;
    const {print, usb, mtp, bluetooth, file_upload, clipboard, app_blacklisting} = req.body;

    if(!policyId){
        return res.status(400).json({success: false, message: "Id not found!"});
    }

    const policyData = new PolicyModels({policyId, print, usb, mtp, bluetooth, file_upload, clipboard,app_blacklisting});  // This line come after if condition

    try {
        let response = await updatePolicyLogic(policyData);
        if(response.success){
            return res.status(200).json(response);
        }else{
            return res.status(400).json(response);
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({status: false, message: "Internal Server Error!"});
    }
}