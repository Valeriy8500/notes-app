import styled from "styled-components";
import PushPinIcon from '@mui/icons-material/PushPin';
import IconButton from "@mui/material/IconButton";

interface NoteProps {
  $isSelected: boolean;
}

export const Note = styled.div<NoteProps>`
  width: 100%;
  background-color: ${props => (props.$isSelected ? "#e1e1df" : "#fff")};
  color: #000;
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const IconBlock = styled.div`
  width: 10%;
`;

export const MainBlock = styled.div`
  width: 90%;
  border-bottom: 1px solid rgba(215, 215, 215, 1);
  padding: 10px 20px 10px 0;
`;

export const Title = styled.h4`
  width: 100%;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DateTime = styled.div`
  width: 100%;
  font-size: small;
`;

export const CustomizedIconButton = styled(IconButton)`
  padding: 0;
`;

export const PushPin = styled(PushPinIcon)`
  transform: rotate(45deg);
  font-size: 20px;
`;
