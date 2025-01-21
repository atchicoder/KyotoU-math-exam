import React from "react";

interface SelectorProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  label: string;
}

const Selector: React.FC<SelectorProps> = ({ options, selected, onChange, label }) => {
  return (
    <div>
      <label>{label}:</label>
      <select value={selected} onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selector;
