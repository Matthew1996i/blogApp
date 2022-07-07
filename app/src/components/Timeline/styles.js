import styled from 'styled-components';

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  overflow-x: scroll;
  max-height: 90vh;

  > div {
    margin-bottom: 10px;
  }
`;

export default FeedContainer;
