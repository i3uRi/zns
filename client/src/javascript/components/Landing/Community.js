import { h, Component } from 'preact'

export { Community as default, Community }

class Community extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'Community' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">
          <h2>Get involved with the ZNS community</h2>
          <button>Join our gitter</button>
        </div>
      </section>
    )
  }
}
