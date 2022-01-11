import styled from 'styled-components';

export const Buttons = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 28px;

  width: 100%;
`;

export const Button = styled.button`
  width: 92px;
  /* height: 75px; */
  height: 92px;
  /* border-radius: 10px; */
  border-radius: 50%;
  border: none;

  color: #ffffff;
  font-size: 20px;
  font-weight: 400;

  /* background-color: #008fcc; */

  background-image: radial-gradient(
    circle at center,
    #008fcc 55%,
    #0082ba 55%,
    #0082ba 100%
  );

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #0082ba;
    background-image: radial-gradient(
      circle at center,
      #0082ba 55%,
      #008fcc 55%,
      #008fcc 100%
    );
  }
`;

export const Item = styled.li`
  /* &:not(:first-child) {
    margin-left: 10px;
  } */
`;
