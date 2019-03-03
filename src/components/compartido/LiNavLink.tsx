import * as React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';

/**
 * Codigo original: https://stackoverflow.com/q/42980858/3744400
 * Otras ideas: https://stackoverflow.com/a/40530974/3744400
 * https://stackoverflow.com/a/37585174/3744400
 */
export class LiNavLink extends React.Component<any, {}> {
  render() {
    const { to, exact, strict, activeClassName, className, activeStyle, style, isActive: getIsActive, aClassName, ...rest } = this.props;
    return (
      <Route
        path={typeof to === 'object' ? to.pathname : to}
        exact={exact}
        strict={strict}
        children={({ location, match }) => {
          const isActive = !!(getIsActive ? getIsActive(match, location) : match)

          return (
            <li
              className={isActive ? [activeClassName, className].join(' ') : className}
              style={isActive ? { ...style, ...activeStyle } : style}>
              <Link
                to={to}
                className={aClassName}
                {...rest}
              />
            </li>
          )
        }}
      />
    );
  }
}