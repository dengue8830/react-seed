import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LiNavLink } from './LiNavLink';
import { Rutas } from '../../rutas';

interface IProps {

}

export const LeftSidebar = (props: IProps) =>
    <React.Fragment>
        {/* <!-- BEGIN: Left Aside --> */}
        <button className="m-aside-left-close  m-aside-left-close--skin-dark " id="m_aside_left_close_btn"><i className="la la-close"></i></button>
        <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
            <div id="m_ver_menu" className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark " m-menu-vertical="1" m-menu-scrollable="0" m-menu-dropdown-timeout="500">
                <ul className="m-menu__nav ">
                    <li className="m-menu__section m-menu__section--first">
                        <h4 className="m-menu__section-text">Principal</h4>
                        <i className="m-menu__section-icon flaticon-more-v2"></i>
                    </li>
                    <LiNavLink aClassName="m-menu__link" className="m-menu__item" activeClassName="m-menu__item--active" to={Rutas.mapaTaxis} exact={true}>
                        <i className="m-menu__link-icon la la-map" style={{ fontSize: 25 }} />
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Mapa</span>
                            </span>
                        </span>
                    </LiNavLink>
                    <LiNavLink aClassName="m-menu__link" className="m-menu__item" activeClassName="m-menu__item--active" to={Rutas.taxis} exact={true}>
                        <i className="m-menu__link-icon la la-taxi" style={{ fontSize: 25 }} />
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Taxis</span>
                            </span>
                        </span>
                    </LiNavLink>
                    <LiNavLink aClassName="m-menu__link" className="m-menu__item" activeClassName="m-menu__item--active" to={Rutas.choferes} exact={true}>
                        <i className="m-menu__link-icon la la-user" style={{ fontSize: 25 }} />
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Choferes</span>
                            </span>
                        </span>
                    </LiNavLink>
                    <LiNavLink aClassName="m-menu__link" className="m-menu__item" activeClassName="m-menu__item--active" to={Rutas.viajes} exact={true}>
                        <i className="m-menu__link-icon la la-bookmark" style={{ fontSize: 25 }} />
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Viajes</span>
                            </span>
                        </span>
                    </LiNavLink>
                    <LiNavLink aClassName="m-menu__link" className="m-menu__item" activeClassName="m-menu__item--active" to={Rutas.clientes} exact={true}>
                        <i className="m-menu__link-icon la la-users" style={{ fontSize: 25 }} />
                        <span className="m-menu__link-title">
                            <span className="m-menu__link-wrap">
                                <span className="m-menu__link-text">Clientes</span>
                            </span>
                        </span>
                    </LiNavLink>
                </ul>
            </div>
        </div>
        {/* END: Left Aside */}
    </React.Fragment>;
