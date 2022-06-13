import {createTheme} from '@mui/material/styles';

/**
 * primary 主色
 * secondary 次主色
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#52c7e0'
    },
    info:{
      main:'#444C50'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: '#FFF'
        }
      }
    }
  }
});

export default theme