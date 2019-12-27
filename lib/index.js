var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-25 12:12:20
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-25 17:08:28
 */
import { Controller, Res } from "./src/config";
class api {
    constructor() { }
    getList(res) {
        console.log(res);
    }
}
__decorate([
    Controller("/api"),
    __param(0, Res("res"))
], api.prototype, "getList", null);
const ajax = new api();
ajax.getList();
//# sourceMappingURL=index.js.map