import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DEFAULT_VIEWPORT } from '@storybook/addon-viewport';

import Button from './Button';

storiesOf('Button', module)
    .add(
        'with desktop',
        () => {
            const handleClick = action('click');

            return <Button onClick={handleClick}>{text('label', 'My Button Label')}</Button>;
        },
        { viewport: { defaultViewport: DEFAULT_VIEWPORT } },
    )
    .add(
        'with mobile',
        () => {
            const handleClick = action('click');

            return <Button onClick={handleClick}>{text('label', 'My Button Label')}</Button>;
        },
        { viewport: { defaultViewport: 'mobile' } },
    )
    .add(
        'with tablet',
        () => {
            const handleClick = action('click');

            return <Button onClick={handleClick}>{text('label', 'My Button Label')}</Button>;
        },
        { viewport: { defaultViewport: 'tablet' } },
    );
