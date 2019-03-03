import * as React from 'react';
import { RouteComponentProps, Route } from 'react-router-dom';
import { EstadoCarga } from '../../utils/estadoCarga';
import { Rutas } from '../../rutas';
import { Template } from '../../utils/template';
import { SStorage } from '../../utils/storage';
import { http } from '../../utils/http';
import { CartelCargando, CartelContainer } from '../compartido/CartelesGenericos';
import { Header } from '../compartido/Header';
import { Body } from '../compartido/Body';
import { LeftSidebar } from '../compartido/LeftSidebar';
import { Footer } from '../compartido/Footer';
import { Screen } from '../compartido/Screen';

interface IProps extends RouteComponentProps {
}

interface IState {
  estadoCarga: EstadoCarga;
}

export class DashboardScreen extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      estadoCarga: EstadoCarga.Ocioso,
    };
    this.onCerrarSesion = this.onCerrarSesion.bind(this);
  }

  componentDidMount() {
    Template.init();
  }

  onCerrarSesion() {
    SStorage.cerrarSesion();
    http.clearCredenciales();
    this.props.history.push(Rutas.login);
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
            <Header onCerrarSesion={this.onCerrarSesion} />
            <Body>
              <LeftSidebar />
              <Route exact={true} path={Rutas.dashboard} component={DashboardMain} />
              {/* <Route exact={true} path={Rutas.taxis} component={ListadoTaxisScreen} />
              <Route exact={true} path={Rutas.choferes} component={ListadoChoferesScreen} /> */}
            </Body>
            <Footer />
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

const DashboardMain = (props: IProps) =>
  <Screen>
    <div className="m-content">
      <CartelContainer>
        <h3>Bienvenido</h3>
        <h4>Selecciona una opción del menú</h4>
      </CartelContainer>
    </div>
  </Screen>;