import { h, Component } from 'preact'

export { Credibility as default, Credibility }

class Credibility extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'Credibility' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">Credibility</div>
      </section>
    )
  }
}
