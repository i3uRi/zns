import { h, Component } from 'preact'

export { Roadmap as default, Roadmap }

class Roadmap extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'Roadmap' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">Roadmap</div>
      </section>
    )
  }
}
