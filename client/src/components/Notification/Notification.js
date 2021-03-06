import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';
import { Link } from '@mui/material';

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

export default function Notification() {
  const [notificationState, setNotificationState] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
    Transition: Slide,
  });

  const { vertical, horizontal, open } = notificationState;

  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification.message.length > 0) {
      setNotificationState((prev) => ({
        ...prev,
        open: true,
      }));
    }
  }, [notification]);

  const handleClose = () => {
    setNotificationState((prev) => ({ ...prev, open: false }));
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        TransitionComponent={notification.Transition}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          <Link variant="subtitle2" component={RouterLink} to={notification?.url} sx={{ textDecoration: 'none', color: 'inherit' }}>
            {notification?.message}
          </Link>
        </Alert>
      </Snackbar>
    </Stack>
  );
}
