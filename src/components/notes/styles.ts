import styled from "styled-components";
import PushPin from "@mui/icons-material/PushPin";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
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

export const HighPriorityBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const HighPriorityIconButton = styled(IconButton)`
  padding: 0;
`;

export const HighPriorityIcon = styled(PriorityHighIcon)`
  font-size: 28px;
  color: red;
`;

export const MainBlock = styled.div`
  width: 78%;
  border-bottom: 1px solid rgba(215, 215, 215, 1);
  padding: 10px 10px 10px 0;
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
  height: 18px;
`;

export const DateTime = styled.div`
  width: 100%;
  font-size: small;
`;

export const PushPinIconButton = styled(IconButton)`
  padding: 0;
`;

export const PushPinIcon = styled(PushPin)`
  transform: rotate(45deg);
  font-size: 18px;
`;

export const ColorBlock = styled.div`
  width: 7%;
  border-bottom: 1px solid rgba(215, 215, 215, 1);
`;
