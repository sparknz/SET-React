import tokens from '@sparknz/set-tokens/build/web/tokensWithVariations';
import fs from 'fs';

const res = {};
const rec = (thing, otherThing, path) => {
  Object.keys(thing).forEach((key) => {
    if (thing[key].value) {
      otherThing[key] = '123456789';
    } else {
      if (!otherThing[key]) {
        otherThing[key] = {};
      }
      rec(thing[key], otherThing[key], `${path}.${key}`);
    }
  });
};
rec(tokens.base.color, res, '');


fs.writeFileSync('./src/components/SETThemeProvider/interfaces.ts', `
import { FlattenInterpolation, ThemeProps } from 'styled-components'

export interface Colors ${JSON.stringify(res).replace(/"123456789"/g, 'FlattenInterpolation<ThemeProps<any>>')}
`);
