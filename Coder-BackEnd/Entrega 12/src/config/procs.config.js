// import minimist from "minimist";
const minimist=require("minimist");

const optionalArgsObject = {
  alias: {
    p: "puerto",
    m: "modo",
  },
  default: {
    p: 8080,
    m: "fork",
  },
};

// export const args = minimist(process.argv.slice(2), optionalArgsObject);
module.exports = minimist(process.argv.slice(2), optionalArgsObject);