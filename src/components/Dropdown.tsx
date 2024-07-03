import { FunctionComponent } from "react";

type DropdownProps = {
  items: string[];
};

const Dropdown: FunctionComponent<DropdownProps> = ({ items }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 mt-2">
      {items.map((item, index) => (
        <div key={index} className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch bg-grey-white overflow-hidden flex flex-row items-start justify-start py-3 px-[11px] whitespace-nowrap">
            <a className="[text-decoration:none] relative tracking-[0.01em] leading-[18px] text-[inherit]">
              {item}
            </a>
          </div>
          {index < items.length - 1 && (
            <div className="self-stretch h-px relative bg-grey-light z-[1] mt-[-1px]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
