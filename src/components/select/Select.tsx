import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function MySelect() {
  const [language, setLanguage] = useState("");

  function handleChange(e: any) {
    setLanguage(e.target.value);
  }

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{ marginTop: "-8px" }}>
          Language
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="language"
          onChange={handleChange}
          style={{ border: "none", outline: "none", height: "40px" }}
        >
          <MenuItem value={10}>Uz</MenuItem>
          <MenuItem value={20}>Eng</MenuItem>
          <MenuItem value={30}>Ru</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
