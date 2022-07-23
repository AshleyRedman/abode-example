import React from 'react';
import { populate, register } from 'react-abode';

import Thing from './Thing';

register('Thing', () => React.memo(Thing));

populate();