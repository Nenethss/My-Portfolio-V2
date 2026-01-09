interface TypeProps {
  activeType: string;
  onChangeType: (type: string) => void;
}

const Type = ({ activeType, onChangeType }: TypeProps) => {
  const filterTypes = ["All", "Frontend", "Fullstack"];

  return (
    <div className="w-full h-auto flex flex-row gap-6 pt-4 justify-center">
      {filterTypes.map((type) => (
        <button
          key={type}
          onClick={() => onChangeType(type)}
          className={`px-4 py-2 rounded-md text-sm font-semibold bg-[#edf2f8] dark:bg-[#212121] transition hover:text-white
            ${
              activeType === type
                ? "bg-blue-500 dark:bg-blue-500 text-white "
                : " dark:hover:bg-blue-500 hover:bg-blue-500"
            }
          `}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default Type;
