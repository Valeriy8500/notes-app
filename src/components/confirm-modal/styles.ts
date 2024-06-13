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
  z-index: 999;
  visibility: visible;
  opacity: 1;
  transition:
    opacity 0.3s,
    visibility linear 0.3s;
`;

export const Container = styled.div`
  position: relative;
  width: 350px;
  min-height: 150px;
  background: #ffffff;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  color: #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;

export const Header = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #f0f0f0;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Title = styled.h2`
  font-family: "Roboto", Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 16px;
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
  font-size: 18px;
  line-height: 24px;
  color: #000;
  text-align: center;
  padding: 15px 0;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0 60px;
`;

export const ConfirmButton = styled.button`
  font-family: "Roboto", Arial, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 20px;
  width: 80px;
  min-height: 36px;
  border: none;
  border-radius: 6px;
  color: #000;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;
