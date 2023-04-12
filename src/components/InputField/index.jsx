const InputField = ({ onKeyUp, onChange, value }) => {
  return (
    <input
      onKeyUp={onKeyUp}
      onChange={onChange}
      value={value}
      className=" capitalize rounded-l-lg flex p-2 bg-[#171926] items-center w-3/4 outline-none"
      type="text"
    />
  );
};

export default InputField;
