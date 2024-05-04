import { info, warn } from "./logger.ts";
import {
    Next,
    Request,
    Response,
} from "https://deno.land/x/oak@v16.0.0/mod.ts";

// Check if status code represents a successful request.
const success = (i: number) => i > 199 && i < 209;

export async function simplelog(
    { request, response }: { request: Request; response: Response },
    next: Next,
) {
    await next();
    const { method, url } = request;
    if (success(response.status)) {
        info(`${method} ${url.pathname}`, response.status);
    } else {
        warn(`${method} ${url.pathname}`, response.status);
    }
}
