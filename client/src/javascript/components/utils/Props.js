import { h } from 'preact'

export { Props, Props as default }

const Props = props => <pre>{JSON.stringify(props, null, 2)}</pre>
Props.displayName = 'Props'
