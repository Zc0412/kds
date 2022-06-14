import {styled} from '@mui/material/styles';
import {TextField, TextFieldProps} from '@mui/material';

const StyledTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: "100px",
    padding: '0 18px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    color: 'rgba(147, 153, 157, 1)',
    // 去掉鼠标事件样式
    '& fieldset': {
      border: 'none',
    },
  },

}));

function CustomizedTextField(props: TextFieldProps) {
  return <StyledTextField {...props} />;
}

export default CustomizedTextField;
