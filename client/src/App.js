import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkUser, deleteUser } from './store/ac/authAC';
// routes
import Router from './routes';

// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

// components
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// delete
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';
import FlashMessage from './components/FlashMessage/FlashMessage';
import Notification from './components/Notification/Notification';
import axios from 'axios';
import useSocket from './hooks/useSocket';
import { startLoading } from './store/ac/isLoadingAC';

function App() {
  const dispatch = useDispatch();
  useSocket(dispatch);

  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = 'http://localhost:3001';
  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      console.log('intereceptor USED');
      if (err.status === 401) {
        dispatch(deleteUser);
      }
      return Promise.reject(err);
    },
  );

  useEffect(() => {
    // dispatch(startLoading());
    dispatch(checkUser());
  }, [dispatch]);

  // useEffect(() => {
  //     console.log(user)
  //   if (user) {
  //     socket.current = io("http://localhost:3001", {
  //       query: { id: user.id },
  //     });
  //       socket.current.on('notification', (msg) => {
  //           console.log('NOTIFICATION', msg)
  //           dispatch(setNewReportNotification(msg.message))
  //       } );
  //       socket.current.on("broadcast-online", (msg) => {
  //           console.log('USERS ONLINE', msg);
  //           dispatch(setOnline(msg.users));
  //       });
  //     dispatch(createSocketConnect(socket, user));
  //   }
  //   // return () => socket.current.emit('logout');
  // }, [user, dispatch]);

  console.log('APP RENDER');
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Notification />
      <FlashMessage />
      <Router />
    </ThemeConfig>
  );
}

export default App;
