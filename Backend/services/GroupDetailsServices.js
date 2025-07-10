import { pool } from '../config/Database.js'

export const getGroupDetailsLogic = async()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM groupDetails;`);

        return {success:true, data:rows}; // get request m message daalne ki zarurat nhi h
    } catch (error) {
        console.log(error);
        return {success:false,message:"Group details not fetched!"};
    }
};

//post group
export const postGroupDetailsLogic = async(groupData)=>{
    try {
        const query = `INSERT INTO groupDetails (name) VALUES (?);`;
        const values = [groupData.name];
        let [rows] = await pool.query(query,values);

        await pool.query(`INSERT INTO policy (groupId, print,usb, mtp, bluetooth, file_upload, clipboard) VALUES (?,true,true,true,true,true,true)`,[rows.insertId]);
        
        return {success:true,message:"Data save successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Data not saved"};
    }
}

export const updateGroupDetailsLogic = async(groupId,groupData)=>{
    try {
        let response = await pool.query(`UPDATE groupDetails SET name=? WHERE groupId=?;`,[groupData.name,groupId ]);

        return {success:true,message:"Field updated successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Field not updated!"};
    }
}

export const deleteGroupDetailsLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM groupDetails WHERE groupId=?`,[id]);
        
        return {success:true,message:"Field deleted successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Field not deleted!"};
    }
}