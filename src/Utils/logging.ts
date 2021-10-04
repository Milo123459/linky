const colors = {
    FgRed: '\x1b[31m',
    FgGreen: '\x1b[32m',
    FgYellow: '\x1b[33m',
    FgBlue: '\x1b[34m',
    FgMagenta: '\x1b[35m',
    FgCyan: '\x1b[36m',
    FgWhite: '\x1b[37m',
};

const tOptions = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    line: '\x1b[4m',
};

export function success(args: string) {
    console.log(
        `${colors.FgGreen}✔ ${tOptions.bright}${tOptions.line}SUCCESS${tOptions.reset} | ${args}`
    );
}

export function warn(args: string) {
    console.log(
        `${colors.FgYellow}⚠️ ${tOptions.bright}${tOptions.line}WARNING${tOptions.reset} | ${args}`
    );
}

export function error(args: string) {
    console.log(
        `❌${colors.FgRed} ${tOptions.bright}${tOptions.line}ERROR${tOptions.reset} | ${args}`
    );
}
