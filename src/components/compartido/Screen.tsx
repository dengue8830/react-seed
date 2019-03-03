import * as React from 'react';
import { Template } from '../../utils/template';

interface IProps {
  children?: any;
  id?: string;
}

export const Screen = (props: IProps) =>
  <div id={props.id} className="m-grid__item m-grid__item--fluid m-wrapper">
    {props.children}
  </div>;

interface ILoadableScreenProps {
  showLoading?: boolean;
  children?: any;
}

export class LoadableScreen extends React.Component<ILoadableScreenProps, {}> {
  id = (Math.random() + '').substring(2);

  componentDidMount() {
    this.showHideLoading();
  }

  componentDidUpdate() {
    this.showHideLoading();
  }

  showHideLoading() {
    if (this.props.showLoading) {
      Template.block(`#${this.id}`);
    } else {
      Template.unblock(`#${this.id}`);
    }
  }

  public render() {
    return (
      <Screen id={this.id} {...this.props} />
    );
  }
}