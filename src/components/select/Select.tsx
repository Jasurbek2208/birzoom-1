import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

// Interface
import { ISelect } from "../../interfaces/Interface";

export default function MySelect({
  list,
  label,
  placeholder,
  option,
  defaultValue,
}: ISelect) {
  const [selectValue, setSelectValue] = useState<string>(defaultValue || "");

  function handleChange(e: any) {
    setSelectValue(e.target.value);
  }

  return (
    <StyledSelect>
      <label
        style={{
          fontWeight: "600",
          fontSize: "12px",
          lineHeight: "16px",
          color: "#32324D",
          marginBottom: "4px",
        }}
      >
        {label}
      </label>

      <FormControl
        sx={{ m: 1, minWidth: 120 }}
        fullWidth
        style={{ position: "relative" }}
      >
        {!selectValue ? <p className="placeholder">{placeholder}</p> : null}
        <Select
          {...option}
          value={selectValue}
          onChange={handleChange}
          displayEmpty
          style={{ height: "38px", width: "100%", margin: "0px" }}
        >
          {list.map((i: any) => (
            <MenuItem key={i} value={i}>
              {i}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledSelect>
  );
}

const StyledSelect = styled.div`
  .MuiFormControl-root {
    position: relative;
    margin: 0px !important;
  }

  .placeholder {
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 14px;
    line-height: 20px;
    color: #8e8ea9;
  }
`;
