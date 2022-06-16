import React from 'react';
import classNames from 'classnames/bind';
import styles from "./OrderCardContent.module.css";
import {OrderCardLevel, OrderCardStatus} from "../../../types/orderCard";

type OrderCardContentProps = {
  children?: React.ReactNode;
} & OrderCardLevel & OrderCardStatus

let cx = classNames.bind(styles);
const OrderCardContent: React.FC<OrderCardContentProps> = ({level = 'low', children}) => {
  /**
   * level:low 12<下单时间
   * level:middle 12<=下单时间<15
   * level:high 下单时间>=15min
   */
  const className = cx({
    'order-card-content': true,
    "order-card-content-low": level === 'low',
    "order-card-content-middle": level === 'middle',
    "order-card-content-high": level === 'high',
  })
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OrderCardContent;