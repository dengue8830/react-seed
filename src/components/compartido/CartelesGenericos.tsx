/**
 * Estos componentes son para reutilizar los mensajes de pantalla completa mas comunes,
 * para algo muy particular no complejizarlos, crea tu propio componente.
 */
import React from 'react';
import { Template } from '../../utils/template';

interface ICartelContainerProps {
  children?: any;
}

interface ICartelGenericoProps {
  imgRequire?: any;
  imgElement?: JSX.Element;
  imgIconName?: string;
  texto?: string;
}

/**
 * Wrapper de Mensaje que le da estilos de pantalla completa
 */
export function CartelContainer(props: ICartelContainerProps) {
  return (
    // <View style={{ height: 250, alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ flex: 1, textAlign: 'center' }}>
      {/* <div style={{ alignItems: 'center', justifyContent: 'center' }}> */}
      {props.children}
      {/* </div> */}
    </div >
  );
}

/**
 * Generador de mensaje generico que se compone de una imagen y un texto.
 * @param props 
 */
export function CartelGenerico(props: ICartelGenericoProps) {
  return (
    <CartelContainer>
      {
        !!props.imgRequire &&
        <img src={props.imgRequire} style={{ height: 70, width: 70 }} />
      }
      {
        props.imgElement
      }
      {
        !!props.imgIconName &&
        <i className={props.imgIconName} style={{ fontSize: 40 }} color='#757575' />
      }
      {
        props.texto &&
        <label
          style={{
            textAlign: 'center',
            color: '#757575',
            margin: 10,
            fontSize: 20
          }}
        >
          {props.texto}
        </label>
      }
    </CartelContainer>
  );
}

/** True cuando no se paso ninguna imagen al mensaje generico. Usada para decidir si usar una imagen por defecto. */
// function noTieneImagen(props: IMensajeGenericoProps): boolean {
//   return !props.imgElement && !props.imgRequire && (!!props.imgIconName || props.imgIconName !== '');
// }

/**
 * Generador de mensaje "vacio"
 * @param props 
 */
export function CartelVacio(props: ICartelGenericoProps) {
  // const imgIconName = noTieneImagen(props) ? 'ios-filing-outline' : props.imgIconName;
  const imgIconName = 'ios-filing-outline';
  const texto = props.texto || 'Sin resultados';
  return CartelGenerico({ ...props, texto, imgIconName });
}

/**
 * Generador de mensaje "cargando"
 * @param props 
 */
// export function CartelCargando(props: ICartelGenericoProps) {
//   const imgElement = <div data-loader="timer" style={{ color: 'red' }} />;
//   const texto = props.texto || 'Espere...';
//   return CartelGenerico({ ...props, texto, imgElement });
// }

export class CartelCargando extends React.Component {
  id = (Math.random() + '').substring(2);

  componentDidMount() {
    Template.block(`#${this.id}`);
  }
  componentWillUnmount() {
    Template.unblock(`#${this.id}`);
  }
  public render() {
    return (
      <div id={this.id} style={{ width: '100%', height: '100%' }} />
    );
  }
}

/**
 * Generador de mensaje "error"
 * @param props 
 */
export function CartelError(props: ICartelGenericoProps) {
  // const imgIconName = noTieneImagen(props) ? 'ios-bug-outline' : props.imgIconName;
  const imgIconName = 'ios-bug-outline';
  const texto = props.texto || 'Ups! se produjo un error, inténtalo de nuevo';
  return CartelGenerico({ ...props, texto, imgIconName });
}