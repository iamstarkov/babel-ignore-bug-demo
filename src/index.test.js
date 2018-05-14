import assert from 'assert';

import fn from './index';

const actual = Object.keys(fn());
const expected = ["en", "sv", "ru"];

assert.deepEqual(actual, expected);
