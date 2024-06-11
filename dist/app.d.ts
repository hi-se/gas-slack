/// <reference types="google-apps-script" />
import type { FilesUploadV2Arguments, WebAPICallResult } from "@slack/web-api";
import { Methods } from "./methods";
export declare class GasSlackClient extends Methods {
    filesUploadV2(_options: FilesUploadV2Arguments): Promise<WebAPICallResult>;
    private API_ENDPOINT;
    readonly slackApiUrl: string;
    readonly token?: string;
    constructor(token?: string, { slackApiUrl }?: {
        slackApiUrl?: string | undefined;
    });
    apiCall(method: string, options?: Record<string, unknown>): WebAPICallResult;
    private makeRequest;
    protected _get(api: string, args: Record<PropertyKey, unknown>): GoogleAppsScript.URL_Fetch.HTTPResponse;
    protected _post(api: string, args: Record<PropertyKey, unknown>): GoogleAppsScript.URL_Fetch.HTTPResponse;
    protected _fetch(url: string, params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions): GoogleAppsScript.URL_Fetch.HTTPResponse;
}
