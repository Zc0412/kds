import React, {useMemo} from 'react';
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import {Box, Container, Stack, Typography} from "@mui/material";
import {useController, useForm} from 'react-hook-form';
import CustomizedButton from "../../components/customizationMuiComponents/CustomizedButton";
import CustomizedTextField from "../../components/customizationMuiComponents/CustomizedTextField";

import styles from './Login.module.css'
import {USER_NAME_REGEXP} from "../../constant/common";
import {useAuth} from "../../hooks/useAuth";

type LoginFormData = {
  username: string
  password: string
}


const Login: React.FC = () => {
  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();
  const navigatePathname = useMemo(() => {
    const state = location.state as { from: string };

    if (state && state.from) {
      return state.from;
    }

    return '/admin/doing';
  }, [location]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>();

  /**
   * 登录
   * @param data
   */
  const onSubmit = handleSubmit((data) => {
    // 解构出username
    let {username} = data

    auth.signin(username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(navigatePathname, {replace: true});
    });
    window.localStorage.setItem('authUser',username)
  });

  /**
   * react-hook-form 表单项控制器
   * 校验username
   */
  const {field: username} = useController({
    name: 'username',
    control,
    rules: {
      required: true,
      pattern: USER_NAME_REGEXP
    },
    defaultValue: '',
  });

  /**
   * react-hook-form 表单项控制器
   * 校验 password
   */
  const {field: password} = useController({
    name: 'password',
    control,
    rules: {
      required: true,
      maxLength: 18,
      minLength: 6,
    },
    defaultValue: '',
  });

  return (
    <section className={styles.container}>
      <Container maxWidth='xs'>
        <main className={styles.main}>
          <Box mb={4}>
            <Typography variant='h4' align='center' className={styles.title}>
              Log in to your restaurant
            </Typography>
          </Box>

          <Box component='form' onSubmit={onSubmit} autoComplete='off'>
            <Stack spacing={3} display="block">
              <CustomizedTextField
                placeholder="Account："
                fullWidth
                error={!!errors.username}
                onChange={username.onChange}
                onBlur={username.onBlur}
                value={username.value}
                name={username.name}
                inputRef={username.ref}
                // type='tel'
                helperText={errors.username && 'Please enter phone'}
              />
              <CustomizedTextField
                placeholder="Password："
                fullWidth
                error={!!errors.password}
                onChange={password.onChange}
                onBlur={password.onBlur}
                value={password.value}
                name={password.name}
                inputRef={password.ref}
                type='password'
                helperText={
                  errors.password && 'Please enter a 6-18 digit password'
                }
              />

              <CustomizedButton
                variant="contained"
                disableElevation
                fullWidth
                size="large"
                type='submit'
              >
                Log in
              </CustomizedButton>
            </Stack>

          </Box>


        </main>
      </Container>

    </section>

  );
};

export default Login;