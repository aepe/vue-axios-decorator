/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-26 09:45:33
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-27 10:46:25
 */
import { sendArgs } from "./type";
export const setPrototypeArguments = (methodName: string) => {
  return `_ajax_${methodName}_parameters`;
};

export const checkArguments = (...args: any[]) => {
  if (args.length > 1) {
    console.log("length so big");
  }
};

export function formattingArguments(...args: any[]) {
  const newArgs: sendArgs = {
    url: args[0],
    data: args[1] || {},
    config: args[2] || {}
  };
  return newArgs;
}
