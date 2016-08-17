import React from 'react';
import { Link } from 'react-router';

export default class Main extends React.Component {
  render(){
    return (
      <div>
        <h1>Web(pack)RTC</h1>
        {React.cloneElement({...this.props}.children, {...this.props})}
      </div>
    )
  }
}
