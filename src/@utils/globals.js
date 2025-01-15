export const CUSTOM_APP_NAME = "custom";
export const CUSTOM_APP_CONTEXT = "custom";

/* derived */
export const APP = window.CONST.APP;
export const APP_CONTEXT = {
    [CUSTOM_APP_NAME]: CUSTOM_APP_CONTEXT
}[window.CONST.APP];

export const remoteServerUrl = window.CONST.remoteServerUrl || ``;
export const remoteJsUrl = window.CONST.remoteJsUrl || ``;
