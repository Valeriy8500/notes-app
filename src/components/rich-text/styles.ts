import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Toolbar = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  margin-right: 15px;
`;

export const CustomizedIconButton = styled(IconButton)`
  background-color: #fff;
  border-radius: 12%;
  padding: 1px 6px;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
