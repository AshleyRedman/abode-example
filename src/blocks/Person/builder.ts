import React from 'react';
import { populate, register } from 'react-abode';

import Person from './Person';

register('Person', () => React.memo(Person));

// Use it, accepts options
populate();
