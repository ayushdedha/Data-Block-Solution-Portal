import { pool } from '../config/Database.js'

//get group
export const getGroupDetailsLogic = async()=>{
    try {
        let [rows] = await pool.query(`SELECT * FROM groupDetails;`);

        return {success:true,message:"group details fetched successfully", data:rows};
    } catch (error) {
        console.log(error);
        return {success:false,message:"group details not fetched"};
    }
};

//post group
export const postGroupDetailsLogic = async(groupData)=>{
    try {
        const query = `INSERT INTO groupDetails (name) VALUES (?);`;
        const values = [groupData.name];
        await pool.query(query,values);

        return {success:true,message:"Data save successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"Data not saved"};
    }
}

//put group
export const updateGroupDetailsLogic = async(groupId,groupData)=>{
    try {
        let response = await pool.query(`UPDATE groupDetails SET name=? WHERE groupId=?;`,[groupData.name,groupId ]);
        return {success:true,message:"field updated successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"field not updated"};
    }
}

//delete group
export const deleteGroupDetailsLogic = async(id)=>{
    try {
        let response = await pool.query(`DELETE FROM groupDetails WHERE groupId=?`,[id]);
        
        return {success:true,message:"field deleted successfully"};
    } catch (error) {
        console.log(error);
        return {success:false,message:"field not deleted"};
    }
}