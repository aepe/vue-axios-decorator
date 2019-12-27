/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-26 11:04:34
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-27 11:15:27
 */
import "reflect-metadata";
import { Config, sendArgs } from "./type";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { formattingArguments } from "./util";
const types: string[] = ["res", "err", "custom"];
const parseConf: any[] = [];
let instance: AxiosInstance;

function Create(config: Config) {
  instance = axios.create({
    baseURL: "https://some-domain.com/api/",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" }
  });
  return function(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
  };
}
function Module(path: string) {
  return function(target: Function) {
    if (!instance) {
      throw "通过 Create 装饰器 创建 instance";
    }
    instance.defaults.baseURL = path;
    Object.seal(target);
    Object.seal(target.prototype);
  };
}
function Post(url: string, data: any, config?: AxiosRequestConfig) {
  // 格式化传入数据
  const newData: sendArgs = formattingArguments(arguments);
  return function(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(target);
    let originalMethod = descriptor.value;
    descriptor.value = async function(...args: any[]) {
      await new Promise((res, rej) => {
        setTimeout(() => {
          console.log("接口调用完成。");
          res();
        }, 3000);
      });
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

function Get() {}

function Res(type: string) {
  return function(target: any, name: string, index: number) {
    parseConf[index] = type;
  };
}
export { Post, Res, Create, Module };
