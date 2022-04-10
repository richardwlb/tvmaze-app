import styled from 'styled-components';

export const Wrapper = styled.section`
  background-color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 9px;
  display: flex;
  display: flex;
  align-items: center;
  margin: 1rem;
  max-height: 30rem;
  flex-grow: 1;
`;

export const ShowDesc = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  font-size: 0.9rem;
  max-height: 24rem;
  flex-grow: 1;
  height: 100%;
`;

export const ShowEpisodesList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px;
  font-size: 0.8rem;
  max-height: 23rem;
  min-width: 25rem;
`;
