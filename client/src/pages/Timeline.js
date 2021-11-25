import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
// mui
import { Grid, Container, Typography } from '@mui/material';

import Page from '../components/Page/Page';
import LentaPostCard from '../components/LentaFolder/LentaPostCard';
import RightSideLentaMenu from '../components/LentaFolder/RightSideLentaMenu';
import { setReports } from '../store/ac/reportsAC';

export default function Timeline() {
  const reports = useSelector((state) => state.reports);
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [currentReports, setCurrentReports] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [reports]);

  useEffect(() => {
    setCurrentReports(reports.slice(0, offset + 1));
  }, [offset, reports]);

  const scrollHandler = (e) => {
    const heightFromBot = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
    if (reports.length > offset && heightFromBot < 100) {
      console.log('asfasdffdasfdsafsd');
      setOffset((prev) => prev + 1);
    }
  };

  useEffect(() => {
    dispatch(setReports());
  }, []);

  return (
    <Page title={t('pages.timeline.title')}>
      <Typography align="center" variant="h4" sx={{ mb: 5 }}>
        {t('pages.timeline.title')}
      </Typography>
      <Container sx={{ display: 'flex', position: 'relative', padding: 4 }}>
        <Grid container spacing={4}>
          {currentReports?.map((report, index) => (
            <LentaPostCard key={report.id} report={report} index={index} />
          ))}
          {/* {reports?.map((report, index) => (
            <LentaPostCard key={report.id} report={report} index={index} />
          ))} */}
        </Grid>
        <RightSideLentaMenu />
      </Container>
    </Page>
  );
}
