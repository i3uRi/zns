import { h, Component } from 'preact'
import './Testimonial.scss'

export { Testimonial as default, Testimonial }

class Testimonial extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'Testimonial' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">Testimonial</div>
      </section>
    )
  }
}
