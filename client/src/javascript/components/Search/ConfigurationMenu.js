import { h } from 'preact'

import { Layout } from '..'
import { Props } from '../utils'

export { ConfigurationMenu as default, ConfigurationMenu }

const ConfigurationMenu = ({ q }) => (
  <section
    style={{
      padding: '2em',
      borderBottom: '1px solid black',
    }}
  >
    <h1>You Own {q}</h1>
    <Props
      {...{
        address: '0x2938459092387402537809485702384750293475',
      }}
    />
  </section>
)
