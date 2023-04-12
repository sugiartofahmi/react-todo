import { BiEdit } from "react-icons/bi";
const ButtonUpdate = ({ style, onClick, size }) => {
  return <BiEdit onClick={onClick} className={style} size={size} />;
};

export default ButtonUpdate;
