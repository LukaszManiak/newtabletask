import styled from "styled-components";

const StyledTablesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
`;

const ListTitle = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
  padding: 0;
  margin: 0;
`;

function TablesList() {
  return (
    <StyledTablesList>
      <ListTitle>ALL TABLES (3)</ListTitle>
    </StyledTablesList>
  );
}

export default TablesList;
