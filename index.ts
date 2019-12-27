/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-25 12:12:20
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-27 11:37:09
 */
import { Post, Create, Res, Module } from "./src/Api";

@Create({
  baseURL: "/",
  timeout: 600,
  headers: {}
})
@Module("/aaa")
class ajax {
  constructor() {}

  get getData(): object {
    return {};
  }
  DATA = {};
  @Post("/api/aaa", new ajax().DATA, {})
  public getList(@Res("res") res?: any) {
    console.log(res);

    return;
  }

  public aaa() {
    console.log("1111");
  }
}

const Ajax = new ajax();

async function a() {
  await Ajax.getList("aaa");
}
a();
