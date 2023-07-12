import { use, StackContext, SvelteKitSite } from "sst/constructs";
import { SecretsStack } from "./SecretsStack";

export function SvelteStack({ stack }: StackContext) {
  const { TEST_SECRET } = use(SecretsStack);
  const site = new SvelteKitSite(stack, "site", {
    path: "packages/svelte",
    bind: [TEST_SECRET]
  });
  stack.addOutputs({
    url: site.url,
  });
}
