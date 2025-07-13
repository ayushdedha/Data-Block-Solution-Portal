import { ApplicationModel, ApplicationModels } from '../models/ApplicationModels.js'
import { addDeviceLogic } from '../services/ApplicationServices.js'

export const addDevice = async () => {
    let {deviceName, os, mac_address, ip_address} = req.body;

    if(!mac_address){
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

        res.setHeader('Content-Type', 'text/plain');
        return res.status(400).send(iniError);
    }

    let deviceData = await ApplicationModels({deviceName, os, mac_address, ip_address});

    try {
        let response = await addDeviceLogic(deviceData);
        if(response.success) {
            res.setHeader('Content-Type', 'text/plain');
            return res.status(200).json(response.data);
        } else {
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

            res.setHeader('Content-Type', 'text/plain');
            return res.status(400).send(iniError);
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

        res.setHeader('Content-Type', 'text/plain');
        return res.status(500).send(iniError);
    }
}