import {SSTConfig} from "sst";
import {SecretsStack} from "./stacks/SecretsStack";
import {SvelteStack} from "./stacks/SvelteStack";

export default {
  config(_input) {
    return {
      name: "sst-svelte-config",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app
        .stack(SecretsStack)
        .stack(SvelteStack)
  }
} satisfies SSTConfig;
