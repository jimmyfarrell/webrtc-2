import React from 'react';

export default class Layout extends React.Component {
  constructor(){
    super();
    this.joinCall = this.joinCall.bind(this);
    this.startCall = this.startCall.bind(this);
  }

  joinCall(e){
    e.preventDefault();
    const chatId = this.refs.chatId.value;
    this.props.test(chatId);
  }
  
  startCall(){
  }

  render() {
    return (
      <div>
        <input type='text' ref="chatId"/>
        <button onClick={this.joinCall}>Click ME!</button>
        <button onClick={this.startCall}>Start Call</button>
      </div>
    );
  }
}
