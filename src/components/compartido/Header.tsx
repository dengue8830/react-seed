import * as React from 'react';

interface IProps {
  onCerrarSesion: () => void;
}

export const Header = (props: IProps) =>
  <header id="m_header" className="m-grid__item    m-header " m-minimize-offset="200" m-minimize-mobile-offset="200">
    <div className="m-container m-container--fluid m-container--full-height">
      <div className="m-stack m-stack--ver m-stack--desktop">

        {/* <!-- BEGIN: Brand --> */}
        <div className="m-stack__item m-brand  m-brand--skin-dark ">
          <div className="m-stack m-stack--ver m-stack--general">
            <div className="m-stack__item m-stack__item--middle m-brand__logo">
              <a href="index.html" className="m-brand__logo-wrapper">
                {/* <img alt="" src="assets/demo/media/img/logo/logo_default_dark.png" /> */}
              </a>
            </div>
            <div className="m-stack__item m-stack__item--middle m-brand__tools">

              {/* <!-- BEGIN: Left Aside Minimize Toggle --> */}
              <a href="javascript:;" id="m_aside_left_minimize_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-desktop-inline-block  ">
                <span></span>
              </a>
              {/* <!-- END --> */}

              {/* <!-- BEGIN: Responsive Aside Left Menu Toggler --> */}
              <a href="javascript:;" id="m_aside_left_offcanvas_toggle" className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block">
                <span></span>
              </a>
            </div>
          </div>
        </div>

        {/* <!-- END: Brand --> */}
        <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">

          {/* <!-- BEGIN: Horizontal Menu --> */}
          <button className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark " id="m_aside_header_menu_mobile_close_btn"><i className="la la-close"></i></button>
          <div id="m_header_menu" className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark ">
            {/* <!-- acciones dropdown: <ul class="m-menu__nav  m-menu__nav--submenu-arrow "></ul> --> */}
          </div>

          <div id="m_header_topbar" className="m-topbar  m-stack m-stack--ver m-stack--general">
            <div className="m-stack__item m-topbar__nav-wrapper">
              <ul className="m-topbar__nav m-nav m-nav--inline">
                <li id="m_quick_sidebar_toggle" className="m-nav__item">
                  <a onClick={props.onCerrarSesion} href="javascript:;" className="m-nav__link m-dropdown__toggle" title="Cerrar Sesión">
                    <span className="m-nav__link-icon"><i className="flaticon-logout"></i></span>
                  </a>
                </li>
                {/* <li className="m-nav__item m-topbar__user-profile  m-dropdown m-dropdown--medium m-dropdown--arrow  m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light" m-dropdown-toggle="click">
                  <a href="#" className="m-nav__link m-dropdown__toggle">
                    <span className="m-topbar__userpic">
                      <img src="../assets/app/media/img/users/user4.jpg" className="m--img-rounded m--marginless m--img-centered" alt="" />
                    </span>
                    <span className="m-nav__link-icon m-topbar__usericon  m--hide">
                      <span className="m-nav__link-icon-wrapper"><i className="flaticon-user-ok"></i></span>
                    </span>
                    <span className="m-topbar__username m--hide">Nick</span>
                  </a>
                  <div className="m-dropdown__wrapper">
                    <span className="m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust"></span>
                    <div className="m-dropdown__inner">
                      <div className="m-dropdown__header m--align-center">
                        <div className="m-card-user m-card-user--skin-light">
                          <div className="m-card-user__pic">
                            <img src="assets/app/media/img/users/user4.jpg" className="m--img-rounded m--marginless" alt="" />
                          </div>
                          <div className="m-card-user__details">
                            <span className="m-card-user__name m--font-weight-500">Tucuman Modelo Remis</span>
                            <a href="" className="m-card-user__email m--font-weight-300 m-link">tucumanmodeloremis@gmail.com</a>
                          </div>
                        </div>
                      </div>
                      <div className="m-dropdown__body">
                        <div className="m-dropdown__content">
                          <ul className="m-nav m-nav--skin-light">
                            <li className="m-nav__item">
                              <a href="snippets/pages/user/login-1.html" className="btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder">Logout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>;
