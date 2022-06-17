import React from 'react';
import {Stack} from "@mui/material";
import classNames from "classnames/bind";
import CustomizedChip from "../../customizationMuiComponents/CustomizedChip";
import {formatTime} from "../../../utils/common";
import styles from './OrderCardHeader.module.css'
import {OrderCardLevel} from "../../../types/orderCard";

type OrderCardHeaderProps = {
  /**
   * pickUp 外带
   */
  pickUp?: boolean;
  /**
   * number 桌号
   */
  number: number | string;
  /**
   * name 名字
   */
  name: string;
  /**
   * dateTime下单时间
   */
  dateTime: string;
  /**
   * remark备注
   */
  remark?: string
} & OrderCardLevel

const cx = classNames.bind(styles)
const OrderCardHeader: React.FC<OrderCardHeaderProps> = (
  {
    pickUp = false,
    number,
    name,
    dateTime,
    remark,
    level = 'low'
  }
) => {
  const className = cx({
    'order-card-header': true,
    'order-card-header-level': level !== 'low'
  })
  const orderTime = formatTime(dateTime)
  return (
    <div className={className}>
      <div className={styles['order-card-header-title']}>
        <Stack direction='row' alignItems="center">
          {
            pickUp && <CustomizedChip label='Pick up' size="small" sx={{mr: 0.6}} />
          }
          <strong>
            <span>{number}</span>
            /
            <span>{name}</span>
          </strong>
        </Stack>
        <span className={styles['order-card-header-time']}>{orderTime}</span>
      </div>

      {remark && <div className={styles['order-card-header-remark']}><span>{remark}</span></div>}
    </div>
  );
};

export default OrderCardHeader;