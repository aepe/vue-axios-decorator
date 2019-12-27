"use strict";
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
 * @Date: 2019-12-25 17:09:12
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-25 17:09:18
 */
const parseConf = [];
class Modal {
    addOne(num) {
        console.log("num:", num);
        return num + 1;
    }
}
__decorate([
    parseFunc,
    __param(0, parse("number"))
], Modal.prototype, "addOne", null);
// 在函数调用前执行格式化操作
function parseFunc(target, name, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        for (let index = 0; index < parseConf.length; index++) {
            const type = parseConf[index];
            console.log(type);
            switch (type) {
                case "number":
                    args[index] = Number(args[index]);
                    break;
                case "string":
                    args[index] = String(args[index]);
                    break;
                case "boolean":
                    args[index] = String(args[index]) === "true";
                    break;
            }
            return originalMethod.apply(this, args);
        }
    };
    return descriptor;
}
// 向全局对象中添加对应的格式化信息
function parse(type) {
    return function (target, name, index) {
        parseConf[index] = type;
        console.log("parseConf[index]:", type);
    };
}
let modal = new Modal();
console.log(modal.addOne("10"));
//# sourceMappingURL=index.js.map