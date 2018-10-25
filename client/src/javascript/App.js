import { h, Component } from 'preact'
import Route from 'preact-router'

import { Landing, Search } from './components'

export { App as default }

class App extends Component {
  render() {
    return (
      <Route>
        <Landing path="/" />
        <Search.Search path="/search" />
        <Search.Auction path="/auction" />
        <Search.Bid path="/bid" />
        <Search.Buy path="/buy" />
        <Search.Close path="/close" />
        <Search.ConfigurationMenu path="/configuration-menu" />
        <Search.InvalidName path="/invalid-name" />
        <Search.Open path="/open" />
        <Search.Owned path="/owned" />
        <div default>404</div>
      </Route>
    )
  }
}
