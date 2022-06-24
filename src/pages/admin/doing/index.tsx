import React, {useEffect, useState} from 'react';
import Layout from "../../../components/common/Layout";
import {Stack, Typography} from "@mui/material";
import OrderCard from "../../../components/common/OrderCard";
import OrderCardHeader from "../../../components/common/OrderCardHeader";
import OrderCardAction from "../../../components/common/OrderCardAction";
import OrderCardContent from "../../../components/common/OrderCardContent";
import OrderCardContentChip from "../../../components/common/OrderCardContent/OrderCardContentChip";
import OrderCardContentWrap from "../../../components/common/OrderCardContent/OrderCardContentWrap";
import {queryOrderList} from "../../../services/order/orderList";
import OrderCardDrag, {DragContext} from "../../../components/common/OrderCardDrag";
import Loading from "../../../components/common/Loading";


type DoingProps = {}

const Doing: React.FC<DoingProps> = () => {
  const [orderList, setOrderList] = useState<API.OrderListData[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const queryOrderListData = async () => {
      setLoading(true)
      try {
        const response = await queryOrderList()
        if (response.status === 200) {
          setOrderList(response.data)
          setLoading(false)
        }
      } catch (e) {
        setLoading(false)
        throw e
      }

    }
    queryOrderListData()
  }, [])

  const allDone = (data: API.DishList[]) => {
    return data?.every(({status}) => status === 'done')
  }

  return (
    <Layout>
      {loading && <Loading />}
      {
        orderList?.map(({id, level, pick_up, number, date_time, name, remark, dish_list}) => (
          <OrderCardDrag key={id} enabled={allDone(dish_list)}>
            <OrderCard level={level} key={id}>
              <OrderCardHeader
                level={level}
                pickUp={pick_up}
                number={number}
                dateTime={date_time}
                name={name}
                remark={remark}
              />
              <OrderCardContent level={level}>
                {
                  dish_list?.map(({dish_id, name, quantity, status, specification}) => (
                    <OrderCardContentWrap status={status} key={dish_id} onClick={()=>console.log(dish_id)}>
                      <Stack spacing={0.8}>
                        <Stack direction="row" justifyContent="space-between" alignItems='center'>
                          <Typography variant='h6'>{name}</Typography>
                          <Typography>{quantity}</Typography>
                        </Stack>
                        <Stack direction='row' spacing={0.6} alignItems={"flex-start"}>
                          <Typography variant="caption">▪</Typography>
                          <Typography variant="caption">
                            {specification?.join(' / ')}
                          </Typography>
                        </Stack>
                        <OrderCardContentChip status={status} />
                      </Stack>
                    </OrderCardContentWrap>
                  ))
                }
              </OrderCardContent>
              <DragContext.Consumer>
                {(value) => <OrderCardAction {...value} level={level} disabled={!allDone(dish_list)} />}
              </DragContext.Consumer>

            </OrderCard>
          </OrderCardDrag>
        ))
      }
    </Layout>
  );
};

export default Doing;