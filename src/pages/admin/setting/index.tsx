import React from 'react';
import {useNavigate} from "react-router-dom";
import {Container, Stack, Typography} from "@mui/material";
import CustomizedButton from "../../../components/customizationMuiComponents/CustomizedButton";
import {useAuth} from "../../../hooks/useAuth";
import styles from './Setting.module.css'
type SettingProps = {}

const Setting: React.FC<SettingProps> = () => {
  let navigate = useNavigate();
  let auth = useAuth()
  // 退出登录
  const logout = () => {
    window.localStorage.clear()
    auth.signout(() => navigate("/"));
  }
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
              onClick={logout}
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