import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 48px;
  &::before {
    content: '📗';
    margin-right: 10px;
    /* vertical-align: 0.5rem; */
    font-size: 48px;
  }
`;

export const SectionHeader = styled.h2`
  margin-bottom: 10px;
  font-size: 36px;
`;
