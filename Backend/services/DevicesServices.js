import {pool} from '../config/Database.js'

export const getDevicesLogic = async()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM devices;`);

        return {success:true,data:rows};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Devices not fetched!"};
    }
};

export const postDevicesLogic = async(deviceData)=>{
    try {
        const query = `INSERT INTO devices (device_name,os,mac_address,ip_address) VALUES (?, ?, ?, ?);`;
        const values = [deviceData.device_name,deviceData.os,deviceData.mac_address,deviceData.ip_address];
        await pool.query(query,values);

        return {success:true,message:"Data saved successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Data not saved!"};
    }
}

export const deleteDevicesLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM devices WHERE deviceId=?`,[id]);
        
        return {success:true,message:"Field deleted successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Field not deleted!"};
    }
}