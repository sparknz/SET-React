// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

registerRequireContextHook();
initStoryshots({
    suite: 'Storyshots',
    test: imageSnapshot({
        storybookUrl: 'http://localhost:9001',
    }),
});
