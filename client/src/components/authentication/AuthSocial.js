import { Icon } from '@iconify/react';
import googleFill from '@iconify/icons-eva/google-fill';
import { Stack, Button, Divider, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
// ----------------------------------------------------------------------

export default function AuthSocial() {
  const { t } = useTranslation();
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button size="large" color="inherit" variant="outlined" sx={{ borderRadius: '50%', width: 65, height: 65 }}>
          <Icon icon={googleFill} color="#DF3E30" height={24} />
        </Button>
      </Stack>

      <Divider sx={{ my: 3 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {t('pages.auth.or')}
        </Typography>
      </Divider>
    </>
  );
}
