import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { Rutas } from '../rutas';
import { SStorage } from '../utils/storage';
import { http } from '../utils/http';
import { LoginScreen } from './compartido/LoginScreen';
import { DashboardScreen } from './admin/DashboardScreen';

declare global {
  interface Window {
    mApp: any;
    mLayout: any;
    mQuickSidebar: any;
    $: any;
    toastr: any;
    swal: any;
    // google: any;
    // infowindow: any;
  }
}

interface IProps extends RouteComponentProps {}

export class App extends Component<IProps, {}> {
  async componentDidMount() {
    const sesion = await SStorage.getSesion();
    const token = await SStorage.getToken();
    if (!sesion || !token) {
      this.props.history.push(Rutas.login);
    } else {
      http.setCredenciales(token);
      this.props.history.push(Rutas.dashboard);
    }
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* <Route path={Rutas.root} component={SplashScreen} /> */}
        <Route path={Rutas.login} component={LoginScreen} />
        <Route path={Rutas.dashboard} component={DashboardScreen} />
        {
          // Necesario para que no quede con pantalla en blanco, no estoy seguro por que
          // this.props.location.pathname === '/' &&
          // <Redirect push={true} to={Rutas.dashboard} />
        }
      </BrowserRouter>
    );
  }
}