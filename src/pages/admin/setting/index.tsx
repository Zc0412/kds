import React from 'react';
import {Container, Stack, Typography} from "@mui/material";
import CustomizedButton from "../../../components/common/customizationMuiComponents/CustomizedButton";
import styles from './Setting.module.css'

type SettingProps = {}

const Setting: React.FC<SettingProps> = () => {
  return (
    <section className={styles.container}>
      <main className={styles.main}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>
          Setting
        </Typography>
        <Container maxWidth='xs'>
          <Stack spacing={3} display='block' mt={16}>
            <Typography variant='h5' sx={{fontWeight: 'bold'}} align='center'>
              GTYRO DELICIOUS
            </Typography>
            <CustomizedButton
              variant="contained"
              disableElevation
              fullWidth
              color='info'
            >
              Log out
            </CustomizedButton>
          </Stack>
        </Container>
      </main>
    </section>
  );
};

export default Setting;