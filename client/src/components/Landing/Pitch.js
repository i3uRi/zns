import { h, Component } from 'preact'
import './Pitch.scss'

export { Pitch as default, Pitch }

class Pitch extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'Pitch' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">Pitch</div>
      </section>
    )
  }
}
