/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-26 09:17:17
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-26 09:48:39
 */
export type Constructor = {
  new (...args: any[]): any;
};

export type ReqArg = {
  res: Object | any[];
  err?: Function;
};
