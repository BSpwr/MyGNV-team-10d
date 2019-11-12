import React from 'react';

class IndivProvider extends React.Component {
  render() {
    console.log( "hello us this printing "+ this.props.selectedProvider )
    const data = this.props.providers;
    const selectProvider = this.props.selectedProvider;
    return (
      <div>
        <h1>
          text
        </h1>
      </div>
    )
    
  
  }
}

export default IndivProvider;