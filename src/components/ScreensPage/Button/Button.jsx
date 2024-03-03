const Button = ({ className, type = 'button', handlerClick, children }) => {
  return (
    <button className={className} type={type} onClick={handlerClick}>
      {children}
    </button>
  );
};

export default Button;
