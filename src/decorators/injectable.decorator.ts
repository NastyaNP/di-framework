import { Class, ITMetadataProperties } from "../types";
import { reflect } from "typescript-rtti";
import { ITest } from "../interfaces/test";
import { getType } from "tst-reflect";



export function Injectable() {
    return function<T extends Class<Object>>(target: T) {
        const interfaceType = getType<T>().interface;
        console.log("Injectable", {
            target,
            interfaceType,
            isClass: reflect<T>().is("class"),
            className: target.name,
            implements: Reflect.getMetadata(ITMetadataProperties.IMPLEMENTS, target),
            metadataKeys: Reflect.getMetadataKeys(target),
        });

    }
}
