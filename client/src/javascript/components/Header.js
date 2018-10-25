import { h, Component } from 'preact'

export { Header as default, Header }

class Header extends Component {
  render({ className, ...props }) {
    return (
      <header
        className={'header' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space between',
            }}
          >
            <div>zns</div>
            <div>menu</div>
          </div>
        </div>
      </header>
    )
  }
}
