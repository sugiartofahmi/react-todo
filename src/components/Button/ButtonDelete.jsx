import { TiDeleteOutline } from "react-icons/ti";
const ButtonDelete = ({ style, onClick, size }) => {
  return <TiDeleteOutline onClick={onClick} className={style} size={size} />;
};

export default ButtonDelete;
