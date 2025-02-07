import Image from "next/image";

export const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
  className = "bg-gray-100",
  icon,
}) => {
  return (
    <div
      className={`flex items-center rounded-lg p-2 ${className} ${
        icon === "search" ? "" : "border border-white"
      }`}
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${
          icon === "search" ? "bg-gray-100" : "bg-transparent"
        } p-3 outline-none flex-1`}
      />
      {icon && (
        <span className="p-2 w-10">
          <Image src={icon} alt={`${icon}-input`} width={24} height={24} />
        </span>
      )}
    </div>
  );
};
