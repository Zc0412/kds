import React from 'react';
import classNames from 'classnames/bind';
import styles from "./OrderCardContent.module.css";
import {OrderCardStatus} from "../../../types/orderCard";


type OrderCardContentWrapProps = {
  children?: React.ReactNode;
  onClick?: () => void
} & OrderCardStatus

const cx = classNames.bind(styles);
const OrderCardContentWrap: React.FC<OrderCardContentWrapProps> = ({children, status = 'doing', onClick}) => {
  const className = cx({
    'order-content-dish': true,
    'order-content-dish-done': status === 'done'
  })

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default OrderCardContentWrap;