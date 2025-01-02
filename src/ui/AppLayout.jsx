import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import styled from "styled-components";
import Notes from "./Notes";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 30rem 38rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Notes />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
