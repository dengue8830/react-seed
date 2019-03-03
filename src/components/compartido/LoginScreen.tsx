import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CartelError, CartelCargando } from './CartelesGenericos';
import { EstadoCarga } from '../../utils/estadoCarga';

interface IProps extends RouteComponentProps {
}

interface IState {
  estadoCarga: EstadoCarga,
}

export class LoginScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      estadoCarga: EstadoCarga.Ocioso,
    };
  }

  componentDidMount() {
    
  }

  public render() {
    return (
      <div>
        {
          this.state.estadoCarga === EstadoCarga.Cargando &&
          <CartelCargando />
        }
        {
          this.state.estadoCarga === EstadoCarga.Error &&
          <CartelError />
        }
        {
          this.state.estadoCarga === EstadoCarga.Ocioso &&
          <div>hola</div>
        }
      </div>
    );
  }
}
