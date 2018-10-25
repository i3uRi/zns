import { h, Component } from 'preact'

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
