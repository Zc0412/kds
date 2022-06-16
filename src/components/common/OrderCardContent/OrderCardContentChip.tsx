import React from 'react';
import {Box} from "@mui/material";
import classNames from 'classnames/bind';
import CustomizedChip from "../../customizationMuiComponents/CustomizedChip";
import doingWhite from "../../../assets/images/doing_white@2x.png";
import doneWhite from "../../../assets/images/done_white@2x.png";
import styles from "./OrderCardContent.module.css";
import {OrderCardStatus} from "../../../types/orderCard";

type OrderCardContentChipProps = {} & OrderCardStatus
const cx = classNames.bind(styles);
const OrderCardContentChip: React.FC<OrderCardContentChipProps> = ({status = 'doing'}) => {
  const chipIcon = status === 'done' ? doneWhite : status === 'doing' ? doingWhite : undefined
  const chipClassName = cx({
    'order-content-dish-status': true,
    'order-content-dish-status-doing': status === 'doing',
    'order-content-dish-status-done': status === 'done'
  })

  const chipIconClassName = cx({
    'order-content-dish-icon-doing': status === 'doing',
    'order-content-dish-icon-done': status === 'done'
  })

  const label = status === 'doing' ? 'Doing' : status === 'done' ? 'Done' : null
  return (
    <Box>
      <CustomizedChip
        label={label}
        size='small'
        className={chipClassName}
        icon={<img className={chipIconClassName} src={chipIcon} alt="icon" />}
      />
    </Box>
  );
};

export default OrderCardContentChip;