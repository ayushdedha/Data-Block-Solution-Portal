import {pool} from '../config/Database.js'

const users = `CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);`;

const groupDetails = `CREATE TABLE IF NOT EXISTS groupDetails(
    groupId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL
);`; 

const policy = `CREATE TABLE IF NOT EXISTS policy(
    policyId INT AUTO_INCREMENT PRIMARY KEY,
    groupId INT NOT NULL,
    print BOOLEAN NOT NULL,
    usb BOOLEAN NOT NULL,
    mtp BOOLEAN NOT NULL,
    bluetooth BOOLEAN NOT NULL,
    file_upload BOOLEAN NOT NULL,
    clipboard BOOLEAN NOT NULL,
    app_blacklisting TEXT,
    FOREIGN KEY (groupId) REFERENCES groupDetails(groupId) ON DELETE CASCADE
);`;

const devices = `CREATE TABLE IF NOT EXISTS devices(
    deviceId INT AUTO_INCREMENT PRIMARY KEY,
    device_name VARCHAR(50) NOT NULL,
    os VARCHAR(50) NOT NULL,
    mac_address VARCHAR(50) UNIQUE NOT NULL,
    ip_address VARCHAR(50) NOT NULL
);`;

const createTable = async(tableName, query)=>{
    try {
        await pool.query(query);
        console.log(`${tableName} table created successfully`);
    } catch (error) {
        console.log(`${tableName} not created`, error);
    }
};

const createAllTables = async()=>{
    try {
        await createTable("users",users);
        await createTable("groupDetails",groupDetails);
        await createTable("policy",policy);
        await createTable("devices",devices);
    } catch (error) {
        console.log(error);
    }
}

export default createAllTables