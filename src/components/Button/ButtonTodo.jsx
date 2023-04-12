const ButtonTodo = ({ style, onClick, text }) => {
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  );
};

export default ButtonTodo;
