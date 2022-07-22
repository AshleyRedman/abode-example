import React from 'react';
import { populate, register } from 'react-abode';

import Text from './Text'; // needs file extention

// Register the component and assign it a name
register('Text', () => React.memo(Text));

// additional config, abode readme etc etc
populate({ attributes: { classname: 'some-class-name' } });
