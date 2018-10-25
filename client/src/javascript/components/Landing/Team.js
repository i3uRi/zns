import { h, Component } from 'preact'

export { Team as default, Team }

class Team extends Component {
  render({ className, ...props }) {
    return (
      <section
        className={'Team' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">Team</div>
      </section>
    )
  }
}
