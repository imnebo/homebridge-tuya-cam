import { API, DynamicPlatformPlugin, Logger, PlatformAccessory, Service, Characteristic } from 'homebridge';
import { TuyaCameraPlatformConfig, device } from './settings';
/**
 * HomebridgePlatform
 * This class is the main constructor for your plugin, this is where you should
 * parse the user config and discover/register accessories with Homebridge.
 */
export declare class TuyaCameraPlatform implements DynamicPlatformPlugin {
    readonly log: Logger;
    readonly config: TuyaCameraPlatformConfig;
    readonly api: API;
    readonly Service: typeof Service;
    readonly Characteristic: typeof Characteristic;
    readonly accessories: PlatformAccessory[];
    version: any;
    tokenInfo: {
        access_token: string;
        refresh_token: string;
        uid: string;
        expire: number;
    };
    countryCode: number;
    endpoint: string;
    access_id: any;
    access_key: any;
    lang: any;
    username: any;
    password: any;
    appSchema: any;
    assetIDArr: Array<any>;
    deviceArr: Array<any>;
    devices: any;
    debugMode: boolean;
    platformLogging?: string;
    constructor(log: Logger, config: TuyaCameraPlatformConfig, api: API);
    logs(): void;
    /**
     * This function is invoked when homebridge restores cached accessories from disk at startup.
     * It should be used to setup event handlers for characteristics and update respective values.
     */
    configureAccessory(accessory: PlatformAccessory): void;
    /**
     * Verify the config passed to the plugin is valid
     */
    verifyConfig(): void;
    refreshAccessTokenIfNeed(path: string): Promise<void>;
    getDevices(): Promise<any>;
    refactoringIdsGroup(array: string | any[], subGroupLength: number): any;
    getDeviceFunctions(deviceID: any): Promise<any>;
    getDevicesFunctions(devIds?: any): Promise<any>;
    getDeviceInfo(deviceID: any): Promise<any>;
    getDeviceListInfo(devIds?: never[]): Promise<any>;
    getDeviceStatus(deviceID: any): Promise<any>;
    removeDevice(deviceID: any): Promise<any>;
    sendCommand(deviceID: any, params: any): Promise<any>;
    getCameraRTSP(device: any, deviceID: any): Promise<any>;
    getCameraHLS(device: device, deviceID: any): Promise<any>;
    request(method: any, path: string, params?: null, body?: null): Promise<any>;
    get(path: string, params?: any): Promise<any>;
    post(path: string, params?: any): Promise<any>;
    delete(path: string, params?: any): Promise<any>;
    getSign(access_id: TuyaCameraPlatformConfig['accessId'], access_key: TuyaCameraPlatformConfig['accessKey'], access_token: string | undefined, timestamp: number | undefined, stringToSign: string): string;
    getStringToSign(method: string, path: string, params: any, body: null): any;
    getSignUrl(path: string, obj: {
        [x: string]: string;
    }): string;
    /**
     * This method is used to discover the your location and devices.
     * Accessories are registered by either their DeviceClass, DeviceModel, or DeviceID
     */
    discoverDevices(): Promise<void>;
    private refreshStream;
    /**
     * If device level logging is turned on, log to log.warn
     * Otherwise send debug logs to debugLog
     */
    infoLog(...log: any[]): void;
    warnLog(...log: any[]): void;
    errorLog(...log: any[]): void;
    debugLog(...log: any[]): void;
    enablingPlatfromLogging(): boolean;
}
//# sourceMappingURL=platform.d.ts.map