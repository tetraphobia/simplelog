export function info(output: string, status?: number): void {
    const timestamp = `[${new Date().toISOString()}]`;
    const prefix = status ? status + " " : "";

    console.log(
        `%c${timestamp} %c${prefix}%c${output}`,
        "color: green",
        "color: white",
        "color: #ffffff",
    );
}

export function warn(output: string, status?: number): void {
    const timestamp = `[${new Date().toISOString()}]`;
    const prefix = status ? status + " " : "";

    console.log(
        `%c${timestamp} %c${prefix}%c${output}`,
        "color: yellow",
        "color: white",
        "color: #ffffff",
    );
}
export function error(output: string, status?: number): void {
    const timestamp = `[${new Date().toISOString()}]`;
    const prefix = status ? status + " " : "";

    console.log(
        `%c${timestamp} %c${prefix}%c${output}`,
        "color: red",
        "color: white",
        "color: #ffffff",
    );
}
