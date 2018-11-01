import { h, Component } from 'preact'
import { Common } from '..'

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
      isEmailValid: /^[^@]+@[^\.]+\..+$/.test(e.target.value),
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
        fetch('https://zil.domains/email', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          body: JSON.stringify({ email: this.state.email }),
        })
          .then(resp => {
            this.setState({
              isSubmitting: false,
            })
            if (!resp.ok) throw new Error('failed to fetch resource')
          })
          .then(() => {
            this.setState({
              errorString: "You're signed up",
            })
          })
          .catch(() => {
            this.setState({
              errorString: 'An error occurred. Please try again',
            })
          })
      },
    )
  }

  render({ className, ...props }) {
    //
    return (
      <section>
        <form
          style={{
            margin: 'auto',
            border: '1px solid black',
          }}
          onSubmit={e => {
            e.preventDefault()

            const match = e.target[0].value.match(/(.+)(?:\.zil)?$/)

            if (match) {
              route('/bid?q=' + match[1] + '.zil')
            }
          }}
        >
          <input
            style={{
              paddingLeft: '1em',
              paddingRight: '1em',
              lineHeight: 1.2,
              height: '3em',
              borderRadius: '1.5em',
            }}
            type="text"
            placeholder="Search or enter name"
          />
          <button
            style={{
              padding: '1em',
            }}
            type="submit"
          >
            Go
          </button>
        </form>
      </section>
    )
  }
}
