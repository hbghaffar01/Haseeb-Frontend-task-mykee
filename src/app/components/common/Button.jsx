const Button = ({
  onClick,
  children,
  style = {},
  color = 'bg-blue-500',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${color} text-white font-semibold rounded-[4px] flex items-center justify-center px-[48px] py-[10px] gap-[10px]`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
