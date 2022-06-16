import React from 'react';
import styles from "./OrderCardAction.module.css";
import {Button} from "@mui/material";
import finishedBlue from "../../../assets/images/finished_blue@2x.png";
import finishedWhite from "../../../assets/images/finished_white@2x.png";
import {OrderCardLevel} from "../../../types/orderCard";

type OrderCardActionProps = {
  disabled?: boolean
} & OrderCardLevel

const OrderCardAction: React.FC<OrderCardActionProps> = ({level = 'low', disabled = false}) => {
  // 订单紧急程度返回的按钮颜色值
  const textColor = level === "low" ? '#30383D' : '#FFFFFF'
  // icon
  const startIcon = level === "low" ? finishedBlue : finishedWhite

  return (
    <div className={styles['order-card-action']}>
      <Button
        disabled={disabled}
        fullWidth
        sx={{color: textColor}}
        startIcon={<img className={styles['order-card-action-icon']} src={startIcon} alt='finished' />}
      >
        Done
      </Button>
    </div>
  );
};

export default OrderCardAction;