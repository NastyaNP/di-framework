import { TypescriptMetadataProperties } from "../types";

export function Autowired() {
    return function <T extends object>(target: T, property: string | symbol) {
        console.log("Autowired", {
            target,
            property,
            metadataKeys: Reflect.getMetadataKeys(target, property),
            type: Reflect.getMetadata(TypescriptMetadataProperties.DESIGN_TYPE, target, property)
        });
    };
}
