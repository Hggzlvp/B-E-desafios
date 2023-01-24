import minimist from "minimist";

const optionalArgsObject = {
    alias: {
        p: "puerto",
    },
    default: {
        p: 8080
    }
}


export const args = minimist(process.argv.slice(2), optionalArgsObject)