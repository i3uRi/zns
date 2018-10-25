import { h } from 'preact'

import { Layout } from '..'
import { Props } from '../utils'

export { Open as default, Open }

const Open = ({ q }) => (
  <section
    style={{
      padding: '2em',
      borderBottom: '1px solid black',
    }}
  >
    <h1>Open {q} for Auction</h1>
    <Props
      {...{
        minCost: '0.08 ZIL',
        minCostUsd: '$0.02',
      }}
    />
    <button>Submit</button>
  </section>
)
