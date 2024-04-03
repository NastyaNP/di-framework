import "./style.css";
import "reflect-metadata";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { Autowired, Injectable } from "./decorators";
import { ITest } from "./interfaces/test";
import { ITMetadataProperties } from "./types";

@Injectable()
@Reflect.metadata(ITMetadataProperties.IMPLEMENTS, [Symbol("ITest")])
class Test implements ITest {
    constructor(private readonly a: number) {}

    @Autowired()
    test(): void {
        throw new Error("Method not implemented.");
    }

    logger() {
        console.log(this.a);
    }
}

Reflect.defineMetadata(ITMetadataProperties.IMPLEMENTS, [Symbol("ITest")], Test.prototype, "test");

@Injectable()
class TestDependencyInjection {


    @Autowired()
    private readonly property!: Test;

    logProperty() {
        console.log({ property: this.property });
    }
}

const testDIObject = new TestDependencyInjection();

console.log({ testDIObject })

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
  </div>
`;



