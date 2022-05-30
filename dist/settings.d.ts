import { PlatformConfig } from 'homebridge';
/**
 * This is the name of the platform that users will use to register the plugin in the Homebridge config.json
 */
export declare const PLATFORM_NAME = "TuyaCamera";
/**
 * This must match the name of your plugin as defined the package.json
 */
export declare const PLUGIN_NAME = "homebridge-tuya-cam";
/**
 * this is the base URL
 */
export declare const DeviceURL = "https://";
export interface TuyaCameraPlatformConfig extends PlatformConfig {
    username?: string;
    password?: string;
    accessId?: string;
    accessKey?: string;
    lang?: string;
    projectType?: string;
    appSchema?: string;
    countryCode?: number;
    debug?: string;
}
export declare type device = {
    deviceId: string;
    hubDeviceId: string;
    active_time: number;
    biz_type: number;
    category: string;
    create_time: number;
    id: string;
    ip: string;
    lat: string;
    local_key: string;
    lon: string;
    model: string;
    name: string;
    online: boolean;
    owner_id: string;
    product_id: string;
    product_name: string;
    status: status;
    sub: boolean;
    time_zone: string;
    uid: string;
    update_time: number;
    uuid: string;
};
declare type status = Array<{
    code: string;
    value: string;
}>;
export declare type deviceStatusResponse = {
    result?: {
        url?: string;
    };
    success?: true;
    t?: number;
};
export declare type payload = {
    commandType: any;
    command: any;
    parameter: any;
};
export declare class CountryUtil {
    constructor();
    getEndPointWithCountryCode(code: string | number): string;
}
export {};
//# sourceMappingURL=settings.d.ts.map