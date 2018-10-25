import { h, Component } from 'preact'

export { GettingStarted as default, GettingStarted }

class GettingStarted extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'GettingStarted' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">
          <h2>Getting started</h2>
          <div>Registrar</div>
          <div>Manage</div>
          <div>Wallet</div>
          <div>Docs</div>
        </div>
      </section>
    )
  }
}
