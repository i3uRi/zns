import { h, Component } from 'preact'
import './Button.scss'

export { Button as default, Button }

class Button extends Component {
  render({ className, ...props }) {
    return (
      <button
        className={'Button' + (className ? ' ' + className : '')}
        {...props}
      />
    )
  }
}
