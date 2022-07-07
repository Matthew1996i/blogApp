import styled from 'styled-components';

export const DashBoardContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 100vh;
`;

export const SideBarArea = styled.div`
  background-color: #fff;
`;

export const ContentArea = styled.div`
  background-color: #f1f1f1;
  /* border: 1px solid red; */
  height: 100%;
  display: block;
`;

export const ActionPublication = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px 10px;
  height: calc(100% - 90vh);

  button {
    color: #fff
  }
`;
