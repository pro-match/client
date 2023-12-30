import { useContext } from 'react';
import Chat from "./chat";
import ChatSearch from './ChatSearch';
import styled from "styled-components";
import { AuthContext } from "../application/store/AuthContext";

const ChatPageContainer = styled.div`
  display: flex;
  max-width: 100vw;
  height: 100vh;
  margin: 0 auto;
  margin-top: 150px; /* 상단 여백 조정 */
`;

const ChatSearchContainer = styled.div`
  flex-grow: 1.5;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;

const ChatContainer = styled.div`
  flex-grow: 6;
`;

const ChatSearchSection = styled.div`
  flex: 1; /* ChatSearch에 대한 flex 비율 설정 */
  border-radius: 20px;
`;

const ChatRoomsSection = styled.div`
  flex: 2; /* ChatRooms에 대한 flex 비율 설정 */
`;

const ChatPage = () => {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  // 로그인되어 있지 않으면 /signin으로 이동
  if (!isLoggedIn) {
    window.location = '/signin';
    return null; // 이동 중에 다른 내용을 렌더링하거나 아무것도 렌더링하지 않도록 선택할 수 있습니다.
  }

  return (
    <ChatPageContainer>
      <ChatSearchContainer>
        <ChatSearchSection>
          <ChatSearch />
        </ChatSearchSection>
      </ChatSearchContainer>
      <ChatContainer>
        <Chat />
      </ChatContainer>
    </ChatPageContainer>
  );
}

export default ChatPage;