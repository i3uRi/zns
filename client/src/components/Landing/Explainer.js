import { h, Component } from 'preact'
import './Explainer.scss'

export { Explainer as default, Explainer }

class Explainer extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'Explainer' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">Explainer</div>
      </section>
    )
  }
}
