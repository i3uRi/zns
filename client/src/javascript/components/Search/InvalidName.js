import { h } from 'preact'

import { Layout } from '..'
import { Props } from '../utils'

export { InvalidName as default, InvalidName }

const InvalidName = ({ q }) => (
  <section
    style={{
      padding: '2em',
      borderBottom: '1px solid black',
    }}
  >
    <h1>{q} is Invalid</h1>
  </section>
)
