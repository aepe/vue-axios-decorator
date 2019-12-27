import { AxiosRequestConfig } from "axios";

/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-26 09:17:17
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-27 10:45:29
 */
export type Constructor = {
  new (...args: any[]): any;
};

export type ReqArg = {
  res: Object | any[];
  err?: Function;
};

export type sendArgs = {
  url: string;
  data: any;
  config: AxiosRequestConfig;
};
export interface Config {
  baseURL: string;
  timeout: number;
  headers: object;
}
