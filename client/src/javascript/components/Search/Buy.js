import { h } from 'preact'

import { Layout } from '..'
import { Props } from '../utils'

export { Buy as default, Buy }

const Buy = ({ q }) => (
  <section
    style={{
      padding: '2em',
      borderBottom: '1px solid black',
    }}
  >
    <h1>Buy {q} Now</h1>
    <Props
      {...{
        cost: '40 ZIL',
        costUsd: '$5.00',
      }}
    />
    <button>Submit</button>
  </section>
)
