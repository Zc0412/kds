import React from 'react';
import classNames from 'classnames/bind';
import styles from './OrderCard.module.css'

type OrderCardProps = {
  children?: React.ReactNode;
  level?: 'low' | 'middle' | 'high';
}

let cx = classNames.bind(styles);


const OrderCard: React.FC<OrderCardProps> = ({children, level = 'low'}) => {
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
  })
  console.log(className)
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OrderCard;