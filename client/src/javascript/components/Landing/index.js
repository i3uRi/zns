import { h } from 'preact'
import { route } from 'preact-router'

import { Layout } from '../Layout'

import { Community } from './Community'
import { Credibility } from './Credibility'
import { Explainer } from './Explainer'
import { GettingStarted } from './GettingStarted'
import { Hero } from './Hero'
import { Pitch } from './Pitch'
import { Roadmap } from './Roadmap'
import { Team } from './Team'
import { Testimonial } from './Testimonial'

export {
  Community,
  Credibility,
  Explainer,
  GettingStarted,
  Hero,
  Pitch,
  Roadmap,
  Team,
  Testimonial,
  //
  Landing,
  Landing as default,
}

const Landing = () => (
  <Layout>
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
          lineHeight: 1.5,
          height: '3em',
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
  </Layout>
)
Landing.displayName = 'Landing'
