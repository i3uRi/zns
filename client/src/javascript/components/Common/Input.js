import { h, Component } from 'preact'

export { Input as default, Input }

class Input extends Component {
  render({
    className,
    type,
    placeholder,
    labelProps = {},
    inputProps = {},
    ...props
  }) {
    let { className: labelClassName, ...restLabelProps } = labelProps
    let { className: inputClassName, ...restInputProps } = inputProps
    return (
      <div className={'Input' + (className ? ' ' + className : '')} {...props}>
        <input
          {...restInputProps}
          type={type}
          className={
            'Input-text' + (inputClassName ? ' ' + inputClassName : '')
          }
          placeholder="&nbsp;"
        />
        <span
          className={
            'Input-label' + (labelClassName ? ' ' + labelClassName : '')
          }
          {...restLabelProps}
        >
          {placeholder}
        </span>
      </div>
    )
  }
}
