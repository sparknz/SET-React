
const glob = require("glob");
const path = require("path");
const fs = require("fs");

module.exports = {
        components: () => {
            return glob.sync("src/components/**/[A-Z]*.tsx")
        },
        propsParser: require('react-docgen-typescript').withCustomConfig(
            './tsconfig.json'
        ).parse,
        styleguideComponents: {
            Wrapper: path.join(__dirname, 'src/styleguide/Wrapper.ts')
        },
        template: {
            head: {
                links: [
                    {
                        rel:'stylesheet',
                        href: 'https://spark.co.nz/content/dam/onespark/spark-icon-family/styles.css'
                    }
                ]
            }
        }
    }

