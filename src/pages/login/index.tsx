import React from 'react';
import {Box, Container, Stack, Typography} from "@mui/material";
import {useController, useForm} from 'react-hook-form';
import CustomizedButton from "../../components/common/customizationMuiComponents/CustomizedButton";
import CustomizedTextField from "../../components/common/customizationMuiComponents/CustomizedTextField";

import styles from './Login.module.css'
import {USER_NAME_REGEXP} from "../../constant/comm";

type LoginFormData = {
  username: string
  password: string
}


const Login: React.FC = () => {

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
    console.log(data)
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