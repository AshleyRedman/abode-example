import React from 'react';
import { Props } from '../../utils/interfaces';

const Text: React.FC<Props> = (props): React.ReactElement => {
  console.log(props); // check me out in the console

  const [state, setState] = React.useState(props.normal); // ssr props, no loading

  React.useEffect(() => {
    setTimeout(() => {
      setState(props.server); // just a test to show we can do async func from props
    }, 2000);
  }, []);

  return <p>{state}</p>;
};

export default Text;
