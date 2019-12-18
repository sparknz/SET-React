import { addParameters, configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

// pick all *.stories.js files within the src/ folder
const req = require.context('../src', true, /\.stories\.js$/);

addDecorator(withKnobs);

const customViewports = {
    mobile: {
        name: 'Mobile',
        styles: {
            width: '375px',
            height: '812px',
        },
    },
    tablet: {
        name: 'Tablet',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
};

addParameters({
    viewport: { viewports: customViewports },
});

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
