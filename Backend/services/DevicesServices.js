import {pool} from '../config/Database.js'

//get device
export const getDevicesLogic = async()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM devices;`);

        return {success:true,message:"devices fetched successfully", data:rows};
    } catch (error) {
        console.log(error);
        return {success:false,message:"devices not fetched"};
    }
};

//post device
export const postDevicesLogic = async(deviceData)=>{
    try {
        const query = `INSERT INTO devices (device_name,os,mac_address,ip_address) VALUES (?, ?, ?, ?);`;
        const values = [deviceData.device_name,deviceData.os,deviceData.mac_address,deviceData.ip_address];
        await pool.query(query,values);

        return {success:true,message:"Data save successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Data not saved"};
    }
}

//delete group
export const deleteDevicesLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM devices WHERE deviceId=?`,[id]);
        
        return {success:true,message:"field deleted successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"field not deleted"};
    }
}