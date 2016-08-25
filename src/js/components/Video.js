import React from 'react';
import { withRouter } from 'react-router'

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('in didmount', this.props.isCaller);
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default withRouter(Video);
