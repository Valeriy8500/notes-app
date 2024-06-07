import styled from "styled-components";

export const ConfirmModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(53, 61, 75, 0.2);
  visibility: visible;
  opacity: 1;
  transition:
    opacity 0.3s,
    visibility linear 0.3s;
`;

export const Container = styled.div`
  position: relative;
  width: 508px;
  min-height: 320px;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  color: black;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 56px;
  background-color: #973137;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Title = styled.h2`
  font-family: "Roboto", Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin: 0;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 18px;
  right: 24px;
  width: 20px;
  height: 20px;
  border: none;
  padding: 0;
  outline: none;
  background-size: 20px 20px;
  background-position: center;
  background-color: rgba(0, 0, 0, 0);
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

export const Content = styled.div`
  font-family: "Roboto", Arial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  color: black;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-height: 60px;
  background-color: #f6f7f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ConfirmButton = styled.button`
  font-family: "Roboto", Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  width: 153px;
  min-height: 36px;
  background-color: #973137;
  border: none;
  border-radius: 6px;
  margin-right: 24px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:nth-child(2) {
    margin-right: 10px;
  }
`;
