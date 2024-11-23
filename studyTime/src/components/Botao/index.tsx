interface BotaoProps {
  children: string
  type?: "submit" | "reset" | "button" | undefined
  onClick?:() => void
}

const Botao = ({children, type, onClick}:BotaoProps) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
      </button>
  )
}

export default Botao