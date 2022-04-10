import styled from 'styled-components';

export const Wrapper = styled.section`
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  overflow: auto;
`;
export const RowsWrapper = styled.section``;

export const EpisodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  padding: 5px;
  width: 96%;
  margin: 0.1rem;
`;

export const EpisodeTable = styled.table`
  border-spacing: 2px;
  border-collapse: separate;
`;

export const EpisodeCellCenter = styled.td`
  text-align: center;
  white-space: nowrap;
  min-width: 3.3rem;
`;

export const HeadCell = styled.td`
  text-align: center;
  min-width: 3.8rem;
`;

export const Episodecell = styled.td`
  width: 100%;
`;
export const EpisodeTableLine = styled.tr`
  background-color: #dcdcdc;
  &:hover {
    background-color: #add8e6;
    cursor: pointer;
  }
`;
