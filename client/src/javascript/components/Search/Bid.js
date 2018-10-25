import { h, Component } from 'preact'

import { Layout, Header, Footer, Common } from '..'
import { getTimeDifference } from '../../utils'

export { Bid as default, Bid }

class Countdown extends Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.forceUpdate()
    }, 30)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { days, hours, minutes, seconds, milliseconds } = getTimeDifference(
      this.props.expiry,
      { precision: 3 },
    )

    return (
      <div style={{ fontFamily: 'monospace' }}>
        {days > 0
          ? days + (days === 1 ? ' day' : ' days')
          : hours.toString().padStart(2, '0') +
            ':' +
            minutes.toString().padStart(2, '0') +
            ':' +
            seconds.toString().padStart(2, '0') +
            '.' +
            milliseconds.toString().padStart(3, '0')}
      </div>
    )
  }
}

const Bid = ({
  q,
  currBid = 0.04,
  bidderCount = 3,
  bidCount = 4,
  minCost = 80.08,
  ttl = 12345,
  expiry = 153412341,
}) => {
  return (
    <Layout>
      <Header />
      <section>
        <h1>Bid on {q}</h1>
      </section>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3>Bidders</h3>
          <div>{bidderCount}</div>
        </div>
        <div>
          <h3>Bids</h3>
          <div>{bidCount}</div>
        </div>
      </section>
      <section>
        <div>
          <h3>Time left</h3>
          <div>{new Date(ttl).toUTCString()}</div>
          <div>, {new Date(expiry).toString()}</div>
        </div>
        <div>
          <h3>Current Bid</h3>
          <div>{currBid}</div>
        </div>
        <Countdown expiry={Date.now() + 1000 * 60 * 60 * 24} />
        <Common.Input
          placeholder={
            'Enter amount greater than ' + minCost.toFixed(4) + ' ZIL'
          }
        />
        <Common.Button>Submit</Common.Button>
      </section>
      <Footer />
    </Layout>
  )
}
