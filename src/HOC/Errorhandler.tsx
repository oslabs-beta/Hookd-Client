import React from 'react';

export interface ErrorHandlerProps {
  
}
 
export interface ErrorHandlerState {
  hasError: boolean;
}
 
class Errorhandler extends React.Component<ErrorHandlerProps, ErrorHandlerState> {
  constructor(props: ErrorHandlerProps) {
    super(props);
    this.state = {hasError: false};
  }
  componentDidCatch(error: any, errorInfo: any) {
    console.log('errorHandler caught an error: ', error);
    this.setState({hasError: true})
  }
  render() { 
    if(this.state.hasError) {
      return <div>Sorry something went wrong</div>
    }
    else {
      return this.props.children;
    }
  }
}
 
export default Errorhandler;