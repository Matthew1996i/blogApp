import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #b6d4fe;

  @media(max-width: 800px) {
    margin-bottom: 0px;
    height: 99.9999%;
  }

  ::before{
    content: '';
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    opacity: .4; 
    z-index: -1;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
`;

export const LoginContent = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 1px 1px 50px 1px rgba(0,0,0, 0.5);

  @media(max-width: 800px) {
    margin-top: 8rem;
  }

  form {
    
    button {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: unset;

      :active {
        border-color: unset;
      }

      :focus {
        box-shadow: none;
      }

      span {
        margin-left: 10px;
        font-weight: bolder;
      }
    }

    input {
      :focus {
        box-shadow: none;
      }
    }

  }
`;

export const ReturnButton = styled.button`
  /* border: 1px solid red !important; */
  margin-top: 10px;
  display: flex;
  flex-direction: row;

  :hover {
    color: #dc3545;
  }
`;

export const MessageLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;
  p {
    margin: 0;
    padding: 5px 12px 5px 0px;
    background-color: "#fff";
    color: ${props => (props.children.props.color)};
    font-weight: ${props => (props.children.props.type === 'warning' ? 'bold' : 'normal')};
    font-size: 0.8rem;
  }

`;

