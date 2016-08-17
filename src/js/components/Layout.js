import React from 'react';

export default class Layout extends React.Component {
  handleSubmit(e){
    e.preventDefault();
    const chatId = this.refs.chatId.value;
    this.props.test(chatId);
  }

  render() {
    return (
      <div>
        <input type='text' ref="chatId"/>
        <button onClick={this.handleSubmit.bind(this)}>Click ME!</button>
      </div>
    );
  }
}
