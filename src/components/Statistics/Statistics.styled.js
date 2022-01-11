import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  padding: 12px 0 28px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 36px;
  font-size: 16px;
  font-weight: 500;
  /* margin-bottom: 10px; */

  border-bottom: 1px solid #efefef;

  &:first-child {
    border-top: 1px solid #efefef;
  }
`;
