/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-25 13:54:04
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-26 11:04:22
 */
// import axios from "axios";

// res  err custom
const parseConf: any[] = [];

export const Config = () => {};

export const Controller = () => {};

export const Async = (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {};

export const Api = (path: string) => (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {
  let originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    const newArgs: any[] = [];
    console.log(args);
    for (let i in parseConf) {
      const type = parseConf[i];
      switch (type) {
        case "res":
          newArgs[i] = { success: "ok" };
          break;
        case "err":
          newArgs[i] = { success: "err" };
          break;
        case "custom":
          newArgs[i] = args[0].custom;
          break;
      }
    }

    console.log("path");
    return originalMethod.apply(this, newArgs);
  };
  return descriptor;
};

export const RequsetBody = (opt: any) => (
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) => {
  let originalMethod = descriptor.value;
  descriptor.value = function(...args: any[]) {
    const newArgs: any = [
      {
        custom: args || [],
        RequsetBody: opt
      }
    ];
    return originalMethod.apply(this, newArgs);
  };
  return descriptor;
  // console.log("descriptor");
};
export function Res(type: string) {
  return function(target: any, name: string, index: number) {
    parseConf[index] = type;
  };
}
