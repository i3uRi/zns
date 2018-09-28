import { h, Component } from 'preact'
import './Textarea.scss'

export { Textarea as default, Textarea }

class Textarea extends Component {
  render({
    className,
    placeholder,
    labelProps = {},
    textareaProps = {},
    ...props
  }) {
    let { className: labelClassName, ...restLabelProps } = labelProps
    let { className: inputClassName, ...restTextareaProps } = textareaProps
    return (
      <div
        className={'Textarea' + (className ? ' ' + className : '')}
        {...props}
      >
        <textarea
          {...restTextareaProps}
          className={
            'Textarea-text' + (inputClassName ? ' ' + inputClassName : '')
          }
          placeholder="&nbsp;"
        />
        <span
          className={
            'Textarea-label' + (labelClassName ? ' ' + labelClassName : '')
          }
          {...restLabelProps}
        >
          {placeholder}
        </span>
      </div>
    )
  }
}
