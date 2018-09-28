import { h, Component } from 'preact'
import { Common } from '..'
import './Hero.scss'

export { Hero as default, Hero }

class Hero extends Component {
  state = {
    email: '',
    isEmailValid: false,
    errorString: '',
    isSubmitting: false,
  }

  onEmailInput = e =>
    this.setState({
      email: e.target.value,
      isEmailValid: /^\S+@\S+\.\S+$/.test(e.target.value),
    })

  onSubmit = e => {
    e.preventDefault()

    if (!this.state.isEmailValid) return

    this.setState(
      {
        errorString: '',
        isSubmitting: true,
      },
      () => {
        fetch('', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          body: JSON.stringify({ email: this.state.email }),
        }).then(resp => {
          if (!resp.ok) throw new Error('failed to fetch resource')
          this.setState({
            isSubmitting: false,
          })
        })
      },
    )
  }

  render({ className, ...props }) {
    //
    return (
      <section
        className={'Hero' + (className ? ' ' + className : '')}
        {...props}
      >
        <div className="container">
          <div
            className="row around-xs middle-xs"
            style={{
              margin: '2em auto',
            }}
          >
            <div
              className="col-xs-12 col-sm-6"
              style={{
                color: '#fff',
              }}
            >
              <h1 style={{ fontSize: '62px' }}>Zilliqa Name Service</h1>
              <div style={{ fontSize: '20px', color: '#ffffffdd' }}>
                Send and recieve ZIL using a customized name you own with the
                Zilliqa Naming Service. We make sending ZIL easy for everybody.
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-5"
              style={{
                backgroundColor: '#fff',
                border: '1px solid rgba(3,27,78,.1)',
                borderRadius: '5px',
                boxShadow: '0 10px 20px rgba(3,27,78,.1)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '16px',
              }}
            >
              <h2
                style={{
                  color: '#04152a',
                  fontSize: '30px',
                }}
              >
                Stay up to date with ZNS.
              </h2>
              <form onSubmit={this.onSubmit} style={{ width: '100%' }}>
                <Common.Input
                  type="text"
                  required
                  style={{ marginTop: '20px' }}
                  placeholder="Email address"
                  inputProps={{
                    onInput: this.onEmailInput,
                    value: this.state.email,
                  }}
                />

                <Common.Button
                  type="submit"
                  style={{ marginTop: '20px' }}
                  disabled={!this.state.isEmailValid}
                >
                  Sign up
                </Common.Button>
              </form>
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '13px',
                }}
              >
                By signing up you agree to the{' '}
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
