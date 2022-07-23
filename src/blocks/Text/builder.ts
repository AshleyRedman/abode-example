import React from 'react';
import { populate, register } from 'react-abode';

import Text from './Text'; // needs file extention

// Register the component and assign it a name
register('Text', () => React.memo(Text));

// Use it, accepts options
populate();
