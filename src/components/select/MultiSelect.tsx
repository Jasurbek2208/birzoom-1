import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { ISelect } from "../../interfaces/Interface";
import styled from "styled-components";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultiSelect({
  list,
  label,
  placeholder,
  option,
}: ISelect) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    console.log(personName);
    
  };

  return (
    <StyledMultiSelect>
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

      <FormControl sx={{ m: 1, width: "100%" }} fullWidth>
        <Select
          {...option}
          style={{ height: "39px", width: "100%", margin: "0px" }}
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {list.map((name: any) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </StyledMultiSelect>
  );
}

const StyledMultiSelect = styled.div`
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
