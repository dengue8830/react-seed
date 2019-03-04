import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Rutas } from '../rutas';
import { LoginScreen } from './compartido/LoginScreen';
import { DashboardScreen } from './admin/DashboardScreen';
import { SplashScreen } from './compartido/SplashScreen';

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

export class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* 
          - Por que no todas las rutas juntas?
           No se puede poner todas las rutas juntas porque no es como mobile, aca se puede dar F5 e
           intentara acceder a la ruta correspondiente, por lo que intentara pintar ej DashboardScreen
           cuando aun no tiene lo necesario inicializado. 
          - Por que no la logica de inicializacion de la app en este componente?
           No se como darle a App una referencia a router, sino habria que poner BrowerRouter en index y no
           me gusta la idea. Asi que SplashScreen termina siendo un hack.
           TODO: Leer mas sobre react-router y buscar una mejor forma de:
           + inicializar la app antes de mostrar cualquier ruta
           + darle seguridad a las rutas controlando que exista una sesion valida (ej que tenga rol admin y que su
            token sea valido)
        */}
        <Route path={Rutas.root} component={SplashScreen} />
      </BrowserRouter>
    );
  }
}