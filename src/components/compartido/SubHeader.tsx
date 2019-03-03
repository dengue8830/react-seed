import * as React from 'react';

interface IProps {
  texto: string;
}

// BEGIN: Subheader
export const SubHeader = (props: IProps) =>
  <div className="m-subheader ">
    <div className="d-flex align-items-center">
      <div className="mr-auto">
        <h3 className="m-subheader__title ">{props.texto}</h3>
      </div>      
    </div>
  </div>;
