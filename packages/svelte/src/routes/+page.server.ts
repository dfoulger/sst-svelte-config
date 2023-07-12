import type {PageServerLoad} from './$types';
import {Config} from "sst/node/config";

export const load = (async event => {
    const secret = Config.TEST_SECRET;
    console.log("Can you keep a secret?", secret);
    return {
        theSecret: secret
    }
}) satisfies PageServerLoad;
