import {pool} from '../config/Database.js'

export const getPolicyLogic = async ()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM policy;`);

        return {success: true, message: "Policy fetched successfully", data: rows};
    } catch (error) {
        console.log(error);
        return {success: false, message: "Policy not fetched!"};
    }
}

export const updatePolicyLogic = async (policyData)=>{
    try {
        let response = await pool.query(`UPDATE policy SET print=?, usb=?, mtp=?, bluetooth=?, file_upload=?, clipboard=?, app_blacklisting=? WHERE policyId=?`,
        [policyData.print, policyData.usb, policyData.mtp, policyData.bluetooth, policyData.file_upload, policyData.clipboard, policyData.app_blacklisting, policyData.policyId]);

        return {success: true, message: "Policy updated successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Policy not updated!"};
    }
}