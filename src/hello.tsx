import * as React from 'react';
import { hot } from 'react-hot-loader';

export interface HelloProps {
  compiler: string,
  framework: string,
}

class Hello extends React.Component<HelloProps, {}> {
  render () {
    return (
      <div>
        Hello from {this.props.compiler} and {this.props.framework}!
      </div>
    )
  }
}

const HotHello = hot(module)(Hello)

export {
  HotHello as Hello
}
