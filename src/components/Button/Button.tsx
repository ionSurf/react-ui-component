type Props = {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => (
  <div>
    {text}
  </div>
)
export default Button