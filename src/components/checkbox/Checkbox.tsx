import { Checkbox, FormControlLabel } from "@mui/material";
import styled from "styled-components";
import { ICheckbox } from "../../interfaces/Interface";

export default function MyCheckbox({ required, label }: ICheckbox) {
  return (
    <StyledInput>
      <FormControlLabel
        control={<Checkbox required={required} />}
        label={label}
      />
    </StyledInput>
  );
}

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;

  .inputLabel {
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #32324d;
  }

  input {
    padding: 10px 16px;
    width: 100%;
    background: #fff;
    border: 1px solid #dcdce4;
    border-radius: 4px;

    &::placeholder {
      font-size: 14px;
      line-height: 20px;
      color: #8e8ea9;
    }
  }
`;
