import { h, Component } from 'preact'
import { Common, Landing, ExtendedFooter, Layout } from './components'
import './App.scss'

export { App as default }
console.log(Common)
class App extends Component {
  render() {
    return (
      <Layout>
        <Landing.Hero />
        {/*  <Landing.Credibility />
        <Landing.Pitch />
        <Landing.GettingStarted />
        <Landing.Explainer />
        <Landing.Testimonial />
        <Landing.Roadmap />
        <Landing.Community />
        <Landing.Team /> */}
        <ExtendedFooter />
      </Layout>
    )
  }
}
