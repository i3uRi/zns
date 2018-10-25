import { h, Component } from 'preact'

export { ExtendedFooter as default, ExtendedFooter }

class ExtendedFooter extends Component {
  render({ className, ...props }) {
    return (
      <footer
        className={'ExtendedFooter' + (className ? ' ' + className : '')}
        {...props}
      >
        <i className="fab fa-gitter" />
        <div className="container">ExtendedFooter</div>
      </footer>
    )
  }
}
