import {styled} from '@mui/material/styles'
import {Button, ButtonProps} from '@mui/material'

const StyledSubscribeButton = styled(Button)({
  borderRadius: '100px',
  padding: '14.5px 0',
  fontWeight: 'bold'
})

function CustomizedButton(props: ButtonProps) {
  return <StyledSubscribeButton {...props} />
}

export default CustomizedButton
