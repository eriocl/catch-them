import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openChat } from '../store/ac/chatAc';

function useChat() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (id) => {
    dispatch(openChat(id, t));
    navigate('/chats');
  };
}

export default useChat;
