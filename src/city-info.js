import * as React from 'react';
import {PureComponent} from 'react';

export default class CityInfo extends PureComponent {
  render() {
    const {info} = this.props;
    const displayName = `${info.city}, ${info.state}`;

    return (
      <div>
      <div>
      Aesthetics Marble World Ltd.
      </div>
      </div>
    );
  }
};