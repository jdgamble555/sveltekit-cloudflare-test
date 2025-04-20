import { getRequestEvent } from '$app/server';
import type { PageServerLoad } from './$types';


export const load = (async () => {

    await consoleOrigin();

}) satisfies PageServerLoad;


const consoleOrigin = async () => {

    const { url } = getRequestEvent();

    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(url.origin);
};