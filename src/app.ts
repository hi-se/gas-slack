import type { FilesUploadV2Arguments, WebAPICallResult } from "@slack/web-api";

import { Methods } from "./methods.js";

export class GasSlackClient extends Methods {
  public filesUploadV2(_options: FilesUploadV2Arguments): Promise<WebAPICallResult> {
    throw new Error("Method not implemented.");
  }
  private API_ENDPOINT = "https://slack.com/api/";
  public readonly slackApiUrl: string;
  public readonly token?: string;

  constructor(token?: string, { slackApiUrl = "https://slack.com/api/" } = {}) {
    super();
    this.token = token;
    this.slackApiUrl = slackApiUrl;
  }
  public apiCall(method: string, options?: Record<string, unknown>): WebAPICallResult {
    const response = this.makeRequest(method, {
      token: this.token,
      ...options,
    });
    return response;
  }
  private makeRequest(url: string, body: Record<PropertyKey, unknown>): WebAPICallResult {
    const response = this._post(url, body);
    return JSON.parse(response.getContentText()) as WebAPICallResult;
  }
  protected _get(api: string, args: Record<PropertyKey, unknown>): GoogleAppsScript.URL_Fetch.HTTPResponse {
    // https://github.com/requests/requests/blob/master/requests/models.py
    const encodedArgs: string = queryEncode({ token: this.token ?? "", ...args });
    const url = `${this.API_ENDPOINT}${api}?${encodedArgs}`;
    const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: "get",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    };
    return this._fetch(url, params);
  }

  protected _post(api: string, args: Record<PropertyKey, unknown>): GoogleAppsScript.URL_Fetch.HTTPResponse {
    const payload = createPayload({ ...args });
    const url = `${this.API_ENDPOINT}${api}`;
    const params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      headers: { Authorization: `Bearer ${this.token}` },
      method: "post",
      payload,
    };
    return this._fetch(url, params);
  }

  protected _fetch(
    url: string,
    params: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions,
  ): GoogleAppsScript.URL_Fetch.HTTPResponse {
    return UrlFetchApp.fetch(url, params);
  }
}

const createPayload = (params: Record<PropertyKey, unknown>) => {
  const payload = { ...params };
  for (const key in payload) {
    const param = payload[key];
    if (typeof param !== "string") payload[key] = JSON.stringify(param);
  }
  return payload;
};

const queryEncode = (params: Record<string, string | string[]>) => {
  const param_list = [];
  for (const key in params) {
    let param = params[key];
    if (Array.isArray(param)) param = param.join(",");
    else if (typeof param == "object") param = JSON.stringify(param);
    param_list.push(`${key}=${param}`);
  }
  return param_list.join("&");
};
