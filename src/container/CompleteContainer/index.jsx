import Animation from "../../components/animation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useLocation } from "react-router-dom";

function CompleteContainer() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleLinkOnClick = useCallback(() => navigate("/"), [navigate]);
  // const handleKeyDown = (e) => {
  //   if (e.keyCode === "13") {
  //     console.log("enter");
  //     handleLinkOnClick();
  //   }
  // };
  return (
    <Container>
      
      <Title>
        입장 절차가 완료되었습니다!
        <br />
        안녕하세요! {location.state}님
      </Title>
        <Animation />
      <Title>
        관리자분께 이 화면을 보여주시고 
        <br />명찰을 받아 가세요!
      </Title>
      {/* <Btn autoFocus onKeyDown={handleKeyDown}></Btn> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  text-align: center;
  color: #52525c;
`;

const Btn = styled.button`
  opacity: 0;
`;

export default CompleteContainer;
