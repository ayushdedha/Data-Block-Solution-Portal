import { pool } from '../config/Database.js'

export const addDeviceLogic = async (deviceData) => {
    try {
        let [existingDevices] = await pool.query(`SELECT * FROM devices;`);

        if(existingDevices.length > 0) {
            let groupId = existingDevices[0].groupId;

            const [policyData] = await pool.query(`SELECT * FROM policy WHERE groupId = ?`, groupId);

            if(policyData.length===0) {
                const iniDefault = `
                    [DataBlockSolution]
                    BlockUSB=false
                    BlockMTP=false
                    BlockBluetooth=false
                    BlockFileUpload=false
                    BlockClipboard=false
                    BlockPrint=false
                    BlockedApps=
                `.trim();

                return {success: true, data: iniDefault};
            }

            const policy = policy[0];

            const iniContent = `
                [DataBlockSolution]
                BlockUSB=${policy.usb? 'true': 'false'}
                BlockMTP=${policy.mtp? 'true': 'false'}
                BlockBluetooth=${policy.bluetooth? 'true': 'false'}
                BlockFileUpload=${policy.file_upload? 'true': 'false'}
                BlockClipboard=${policy.clipboard? 'true': 'false'}
                BlockPrint=${policy.print? 'true': 'false'}
                BlockedApps=${policy.app_blacklisting || ''}
            `.trim();

            return {success: true, data: iniContent}
        } else {
            const iniDefault = `
                [DataBlockSolution]
                BlockUSB=false
                BlockMTP=false
                BlockBluetooth=false
                BlockFileUpload=false
                BlockClipboard=false
                BlockPrint=false
                BlockedApps=
            `.trim();

            return {success: true, data: iniDefault};
        }
    } catch (error) {
        console.log(error);
        const iniError = `
            [DataBlockSolution]
            BlockUSB=false
            BlockMTP=false
            BlockBluetooth=false
            BlockFileUpload=false
            BlockClipboard=false
            BlockPrint=false
            BlockedApps=
        `.trim();

        return {success: false, data: iniError, message: "Operation failed!"};
    }
}