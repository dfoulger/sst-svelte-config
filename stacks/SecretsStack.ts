import { Config, StackContext } from "sst/constructs";

export function SecretsStack({ stack }: StackContext) {
	const TEST_SECRET = new Config.Secret(stack, 'TEST_SECRET');

	return { TEST_SECRET };
}
