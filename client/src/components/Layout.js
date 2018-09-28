import { h, Component } from 'preact'
import './Layout.scss'

export { Layout as default, Layout }

class Layout extends Component {
  render({ children, className, ...props }) {
    return (
      <div className={'Layout' + (className ? ' ' + className : '')} {...props}>
        {children}
      </div>
    )
  }
}
