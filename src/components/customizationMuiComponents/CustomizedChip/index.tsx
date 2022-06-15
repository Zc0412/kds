import Chip, {ChipProps} from '@mui/material/Chip';
import {styled} from '@mui/material/styles';

const StyledChip = styled(Chip)(({theme}) => ({
  borderRadius: 2,
  backgroundColor: theme.palette.primary.main,
  fontWeight: 'bolder',
  // fontSize: 12,
  // height: 20,
  color: '#FFF'
}));

function CustomizedChip(props: ChipProps) {
  return <StyledChip {...props} />;
}

export default CustomizedChip;