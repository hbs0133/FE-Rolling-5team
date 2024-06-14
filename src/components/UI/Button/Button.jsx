import styles from './Button.module.scss'

const Size = {
  small: styles.Small,
  medium: styles.Medium,
  large: styles.Large,
}

function Button({
  size = 'medium',
  type = 'submit',
  disable = false,
  widthMax = false,
  children,
  onClick,
  ...rest
}) {
  const boxSize = Size[size]
  const fullwidth = widthMax ? styles.fullwidth : ''

  return (
    <button
      {...rest}
      className={`${styles.button} ${boxSize} ${fullwidth}`}
      type={type}
      disabled={disable}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
