
const glob = require("glob");
const path = require("path");
const fs = require("fs");

module.exports = {
        components: () => {
            return glob.sync("src/components/**/index.ts")
        },
        propsParser: require("react-docgen-typescript").parse,
    }