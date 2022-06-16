import React from 'react';
import {Box, Stack} from "@mui/material";
import CustomizedChip from "../../customizationMuiComponents/CustomizedChip";
import styles from './OrderCardHeader.module.css'

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
}

const OrderCardHeader: React.FC<OrderCardHeaderProps> = ({pickUp = false, number, name, dateTime, remark}) => {
  return (
    <div className={styles['order-card-header']}>
      <div className={styles['order-card-header-title']}>
        <Stack direction='row' alignItems="center">
          {
            pickUp && <CustomizedChip label='Pick up' size="small" sx={{mr: 0.6}} />
          }
          <Box>
            <span>{number}</span>
            /
            <span>{name}</span>
          </Box>
        </Stack>
        <span className={styles['order-card-header-time']}>{dateTime}</span>
      </div>

      {remark && <div className={styles['order-card-header-remark']}><span>{remark}</span></div>}
    </div>
  );
};

export default OrderCardHeader;