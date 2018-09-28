import { h, Component } from 'preact'
import './Footer.scss'

export { Footer as default, Footer }

class Footer extends Component {
  render({ className, ...props }) {
    return (
      <footer
        className={'Footer' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">footer</div>
      </footer>
    )
  }
}
