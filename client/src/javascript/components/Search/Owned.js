import { h } from 'preact'

import { Layout } from '..'
import { Props } from '../utils'

export { Owned as default, Owned }

const Owned = ({ q }) => (
  <section
    style={{
      padding: '2em',
      borderBottom: '1px solid black',
    }}
  >
    <h1>{q} is Owned</h1>
    <Props
      {...{
        address: '0x2938459092387402537809485702384750293475',

        email: 'braden.pezeshki@gmail.com',

        crypto: {
          btc: '1xek...',
          etc: '0x1234...',
        },

        ipfs: 'QmHashyHash',

        dns: {
          a: '127.0.0.1;127.0.0.2;127.0.0.3',
          aaaa: '::1;2600:8801:c00:6c60:f01d:6e9e:bae9:e205',
        },

        employees: ['mark.zil', 'max.zil'],
      }}
    />
  </section>
)
