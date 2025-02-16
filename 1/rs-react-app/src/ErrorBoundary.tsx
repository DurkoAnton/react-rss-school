import React, { Component, ReactNode } from 'react';

class ErrorBoundary extends Component<{children: Array<object>},{hasError: boolean, fallback: string}> {
  constructor(props : {children: Array<object>}) {
    super(props);
    this.state = { hasError: false, fallback: '' };
  }

  static getDerivedStateFromError(error: { message: string }) {
    return { hasError: true, fallback: error.message };
  }

  render() {
    if (this.state.hasError) {
      const a : Array<ReactNode> = [this.props.children[0] as ReactNode, this.state.fallback]
      return React.Children.toArray(a);
    }
    return React.Children.toArray(this.props.children as Array<ReactNode>)
  }
}

export default ErrorBoundary;
