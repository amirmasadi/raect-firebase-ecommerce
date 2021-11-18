import styled from "styled-components";
import Login from "../components/Login";
import Panel from "../components/Panel";
import TransitionAnimation from "../components/TransitionAnimation";
import { useStateValue } from "../StateProvider/StateProvider";

export default function AdminPanel() {
  const [{ user }] = useStateValue();

  return (
    <PanelWrapper>
      <TransitionAnimation color="var(--gray-2)" delay="1.4" />
      <TransitionAnimation color="var(--blue)" delay="1.2" />
      <TransitionAnimation color="var(--dark-bg)" delay="1.1" />
      {!user && <Login />}
      {user && <Panel />}
    </PanelWrapper>
  );
}

const PanelWrapper = styled.div`
  padding-top: 100px;
`;
