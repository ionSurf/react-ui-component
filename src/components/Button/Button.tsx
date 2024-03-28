import './Button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button: React.FC<ButtonProps> = ({ variant, ...props }) => {
  const colorClass = () => {
    if (variant === 'primary') {
      return {
          borderColor: '#6366F1',
          backgroundColor: '#6366F1',
          color: '#FAFAFA'
        }
    }
    if (variant === 'secondary') {
      return {
          borderColor: '#6366F1',
          backgroundColor: '#FAFAFA',
          color: '#6366F1'
        }
    }
    return {}
  }
  return (
  <button style={{ ...colorClass(), ...props.style }} {...props}>
    {props.children}
  </button>
)}
export default Button