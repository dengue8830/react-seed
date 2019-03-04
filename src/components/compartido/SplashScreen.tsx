import * as React from 'react';
import { RouteComponentProps, Redirect, Route } from 'react-router-dom';
import { SStorage } from '../../utils/storage';
import { Rutas } from '../../rutas';
import { http } from '../../utils/http';
import { CartelCargando } from './CartelesGenericos';
import { EstadoCarga } from '../../utils/estadoCarga';
import { LoginScreen } from './LoginScreen';
import { DashboardScreen } from '../admin/DashboardScreen';

interface IProps extends RouteComponentProps {
}

interface IState {
  estadoCarga: EstadoCarga;
}

export class SplashScreen extends React.Component<IProps, IState> {

  constructor(props) {
    super(props);
    this.state = {
      estadoCarga: EstadoCarga.Cargando
    }
  }

  async componentDidMount() {
    const sesion = await SStorage.getSesion();
    const token = await SStorage.getToken();
    console.log('splash decidiendo...');
    if (!sesion || !token) {
      this.props.history.push(Rutas.login);
    } else {
      http.setCredenciales(token);
      this.props.history.push(Rutas.dashboard);
    }
    this.setState({ estadoCarga: EstadoCarga.Ocioso });
  }

  public render() {
    return (
      <React.Fragment>
        {
          this.state.estadoCarga === EstadoCarga.Cargando &&
          <CartelCargando />
        }
        {
          this.state.estadoCarga === EstadoCarga.Ocioso &&
          <React.Fragment>
            <Route path={Rutas.login} component={LoginScreen} />
            <Route path={Rutas.dashboard} component={DashboardScreen} />
          </React.Fragment>
        }
        {
          // Necesario para que no quede con pantalla en blanco, no estoy seguro por que
          // this.props.location.pathname === '/' &&
          // <Redirect push={true} to={Rutas.dashboard} />
        }
      </React.Fragment>
    );
  }
}
