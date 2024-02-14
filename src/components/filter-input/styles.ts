import styled from "styled-components";
import TextField from '@mui/material/TextField';

export const CustomizedTextField = styled(TextField)`
    margin-left: 10px;

  input {
    padding: 2px;
    background-color: #fff;
    border: none;
    border-radius: 12%;
  }

  input:focus {
    outline: none;
  }
`