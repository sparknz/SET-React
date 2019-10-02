
const glob = require("glob");
const path = require("path");
const fs = require("fs");

module.exports = {
    skipComponentsWithoutExample: true,
    components: () => {
        return glob.sync("src/components/**/[A-Z]*.tsx")
    },
    propsParser: require("react-docgen-typescript").parse,
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/styleguide/Wrapper.ts')
    },
}

