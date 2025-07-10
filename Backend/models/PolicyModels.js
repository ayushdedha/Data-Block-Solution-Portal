export class PolicyModels {
    constructor(policyData) {
        this.print = policyData.print;
        this.usb = policyData.usb;
        this.mtp = policyData.mtp;
        this.bluetooth = policyData.bluetooth;
        this.file_upload = policyData.file_upload;
        this.clipboard = policyData.clipboard;
        this.app_blacklisting = policyData.app_blacklisting;
    }
}