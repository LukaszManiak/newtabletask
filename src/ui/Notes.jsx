import styled from "styled-components";
import Button from "./Button";

const NotesContainer = styled.div`
  padding: 4rem 4.8rem 6.4rem;
  border-right: 0.1rem solid var(--color-bg);
  height: 100vh;
`;

const NotesTitle = styled.p`
  font-size: 3.4rem;
  letter-spacing: 0.6rem;
  font-weight: bold;
`;

function Notes() {
  return (
    <NotesContainer>
      <NotesTitle>All Notes</NotesTitle>
      <Button variation="primary" size="medium">
        Create new note+
      </Button>
    </NotesContainer>
  );
}

export default Notes;
