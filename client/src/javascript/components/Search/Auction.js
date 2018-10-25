import { h } from 'preact'

import { Layout, Footer, Header } from '..'

export { Auction as default, Auction }

const Auction = ({ q, bidderCount = 0, bidCount = 0, ttl = Date.now() }) => (
  <Layout>
    <Header />
    <section>
      <h1>
        <a href={'/search?q=' + q}>{q}</a>
        's Auction History
      </h1>
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
      <div>
        <h3>Time left</h3>
        <div>{new Date(ttl).toString()}</div>
      </div>
    </section>
    {/* All Bids */}
    <section>
      {JSON.stringify({
        startedAt: 1573223532,
        bids: [
          { time: 1, cost: '$5.00', bidder: '0x12341234123412341234' },
          { time: 2, cost: '$10.00', bidder: '0x12341234123412341234' },
          { time: 3, cost: '$20.00', bidder: '0x12341234123412341234' },
          { time: 4, cost: '$40.00', bidder: '0x12341234123412341234' },
          { time: 5, cost: '$80.00', bidder: '0x12341234123412341234' },
        ],
        ttl: 2032500,
        expiry: 1562345250,
      })}
    </section>
    <Footer />
  </Layout>
)
