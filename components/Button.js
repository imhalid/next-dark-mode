const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`rounded-md p-2 transition-all hover:ring-2 hover:ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
