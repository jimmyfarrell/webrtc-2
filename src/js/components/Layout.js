import React from 'react';
import { withRouter } from 'react-router'
import { push } from 'react-router-redux';
import shortid from 'shortid';

class Layout extends React.Component {
  constructor(){
    super();
    this.joinCall = this.joinCall.bind(this);
    this.startCall = this.startCall.bind(this);
  }

  joinCall(e){
    e.preventDefault();
    const callId = this.refs.callId.value;
  }

  startCall(){
    const callId = shortid.generate();
    this.props.setCaller(true);
    this.props.router.push(`/call/${callId}`);
  }

  render() {
    return (
      <div>
        <input type='text' ref="callId"/>
        <button onClick={this.joinCall}>Click ME!</button>
        <button onClick={this.startCall}>Start Call</button>
      </div>
    );
  }
}

export default withRouter(Layout);
