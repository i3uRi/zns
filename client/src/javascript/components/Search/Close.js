import { h } from 'preact'

import { Layout } from '..'
import { Props } from '../utils'

export { Close as default, Close }

const Close = ({ q }) => (
  <section
    style={{
      padding: '2em',
      borderBottom: '1px solid black',
    }}
  >
    <h1>Claim {q}</h1>
    <Props
      {...{
        cost: '0.04 ZIL',
        costUsd: '$0.01',
      }}
    />
    <button>Claim</button>
  </section>
)
