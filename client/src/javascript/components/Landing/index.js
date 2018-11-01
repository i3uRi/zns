import { h } from 'preact'
import { route } from 'preact-router'

import { ExtendedFooter, Layout } from '..'

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
  Landing,
  Landing as default,
}

const Landing = () => (
  <Layout>
    <Hero />
    <Pitch />
    <GettingStarted />
    <Credibility />
    <Explainer />
    <Testimonial />
    {/* <Roadmap /> */}
    <Community />
    {/*
      Maybe put on a separate page
      <Team />
    */}
    <ExtendedFooter />
  </Layout>
)
Landing.displayName = 'Landing'
