import styled from "styled-components";

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

export const DateTime = styled.div`
  width: 100%;
  font-size: small;
`;
