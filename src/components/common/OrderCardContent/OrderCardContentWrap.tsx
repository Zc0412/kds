import React from 'react';
import classNames from 'classnames/bind';
import styles from "./OrderCardContent.module.css";
import {OrderCardStatus} from "../../../types/typing";


type OrderCardContentWrapProps = {
  children?: React.ReactNode;
} & OrderCardStatus

const cx = classNames.bind(styles);
const OrderCardContentWrap: React.FC<OrderCardContentWrapProps> = ({children, status = 'doing'}) => {
  const className = cx({
    'order-content-dish': true,
    'order-content-dish-done': status === 'done'
  })

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default OrderCardContentWrap;