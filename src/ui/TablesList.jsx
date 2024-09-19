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

function TablesList() {
  return (
    <StyledTablesList>
      <p>ALL TABLES (3)</p>
    </StyledTablesList>
  );
}

export default TablesList;
