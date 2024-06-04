const PHASE = process.env.NITRIC_ENV;

/**
 * Execute the provided code block if the application is running
 * @param callback 
 * @returns 
 */
export const inflight = async (callback: () => void | Promise<void>) => {
    if (PHASE === 'cloud' || PHASE === 'local') {
        return await callback();
    }
}

/**
 * Execute the provided code block if the application is building/collecting cloud requirements
 * @param callback 
 * @returns 
 */
export const preflight = async (callback: () => void | Promise<void>) => {
    if (PHASE === 'build') {
        return await callback();
    }
}