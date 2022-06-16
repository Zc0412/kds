import React from 'react';
import classNames from 'classnames/bind';
import styles from './OrderCard.module.css'
import {OrderCardLevel, OrderCardStatus} from "../../../types/typings";

type OrderCardProps = {
  children?: React.ReactNode;
} & OrderCardLevel & OrderCardStatus

let cx = classNames.bind(styles);


const OrderCard: React.FC<OrderCardProps> = ({children, level = 'low', status = 'doing'}) => {
  /**
   * level:low 12<下单时间
   * level:middle 12<=下单时间<15
   * level:high 下单时间>=15min
   */
  const className = cx({
    'order-card': true,
    "order-card-low": level === 'low',
    "order-card-middle": level === 'middle',
    "order-card-high": level === 'high',
    'order-card-all-done': status === 'done'
  })

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OrderCard;