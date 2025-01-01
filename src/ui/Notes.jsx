import styled from "styled-components";
import Button from "./Button";

const NotesContainer = styled.div`
  padding: 4rem 4.8rem 6.4rem;
`;

const NotesTitle = styled.p`
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
  padding: 0;
  margin: 0;
`;

function Notes() {
  return (
    <NotesContainer>
      <NotesTitle>All Notes</NotesTitle>
      <Button variation="primary" size="small">
        Create new note+
      </Button>
    </NotesContainer>
  );
}

export default Notes;
