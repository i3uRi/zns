import { h, Component } from 'preact'

export { Layout as default, Layout }

class Layout extends Component {
  render({ children, className, ...props }) {
    return (
      <div className={'layout' + (className ? ' ' + className : '')} {...props}>
        {children}
      </div>
    )
  }
}
