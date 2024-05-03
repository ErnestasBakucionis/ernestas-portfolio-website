const ButtonChoice: React.FC<{ buttonName: string }> = ({ buttonName }) => {
  return (
    <button
      className=" mx-4 my-6 px-5 py-3 rounded
    transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1
     hover:scale-110 hover:bg-green-700 duration-100"
    >
      {buttonName}
    </button>
  );
};

export default ButtonChoice;
