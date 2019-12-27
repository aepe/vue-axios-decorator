/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2019-12-25 13:54:04
 * @LastEditors  : bhabgs
 * @LastEditTime : 2019-12-25 17:06:12
 */
import "reflect-metadata";
const requiredMetadataKey = Symbol("required");
const parseConf = [];
export const Controller = (path) => (target, name, descriptor) => {
    let originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        for (let i in parseConf) {
            const type = parseConf[i];
            switch (type) {
                case "res":
                    args[i] = { success: "ok" };
            }
            return originalMethod.apply(this, args);
        }
    };
    return originalMethod;
};
export function Res(type) {
    return function (target, name, index) {
        parseConf[index] = type;
        console.log("parseConf[index]:", type);
    };
}
//# sourceMappingURL=config.js.map