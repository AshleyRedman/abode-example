import React from 'react';

interface IProps {
  obj: {
    key: (string | number | number[])[];
  };
}

const Person: React.FC<IProps> = (props): React.ReactElement => {
  console.log(props.obj.key);

  return (
    <>
      <p>{props.obj.key[2]}</p>

      <p>
        {typeof props.obj.key[3] !== 'string' &&
          typeof props.obj.key[3] !== 'number' &&
          props.obj.key[3].map((i) => <span key={i}>{i}</span>)}
      </p>
    </>
  );
};

export default Person;
