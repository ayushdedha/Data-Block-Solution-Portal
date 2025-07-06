export class DevicesModels {
    constructor(deviceData) {
        this.device_name = deviceData.device_name;
        this.os = deviceData.os;
        this.mac_address = deviceData.mac_address;
        this.ip_address = deviceData.ip_address;
    }
}