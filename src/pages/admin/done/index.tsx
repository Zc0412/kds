import React, {useEffect, useState} from 'react';
import {Stack, Typography} from "@mui/material";
import Layout from "../../../components/common/Layout";
import OrderCardHeader from "../../../components/common/OrderCardHeader";
import OrderCardContent from "../../../components/common/OrderCardContent";
import OrderCardContentWrap from "../../../components/common/OrderCardContent/OrderCardContentWrap";
import OrderCardContentChip from "../../../components/common/OrderCardContent/OrderCardContentChip";
import OrderCard from "../../../components/common/OrderCard";
import {queryOrderListDone} from "../../../services/order/orderListDone";
import Loading from "../../../components/common/Loading";


type DoneProps = {}

const Done: React.FC<DoneProps> = () => {
  const [laoding, setLoading] = useState<boolean>(false)
  const [doneList, setDoneList] = useState<API.OrderListData[]>([])

  useEffect(() => {
    const getDoneList = async () => {
      setLoading(true)
      try {
        const response = await queryOrderListDone()
        if (response.status === 200) {
          setDoneList(response.data)
          setLoading(false)
        }
      } catch (e) {
        setLoading(false)
        throw e
      }
    }

    getDoneList()

    return () => setDoneList([])
  }, [])

  return (
    <Layout>
      {laoding && <Loading />}
      {
        doneList?.map(({status, id, pick_up, number, date_time, name, remark, dish_list}) => (
          <OrderCard status={status} key={id}>
            <OrderCardHeader
              pickUp={pick_up}
              number={number}
              dateTime={date_time}
              name={name}
              remark={remark}
            />
            <OrderCardContent>
              {
                dish_list?.map(({dish_id, name, quantity, status, specification}) => (
                  <OrderCardContentWrap status={status} key={dish_id}>
                    <Stack spacing={0.8}>
                      <Stack direction="row" justifyContent="space-between">
                        <Typography>{name}</Typography>
                        <Typography>{quantity}</Typography>
                      </Stack>
                      <Stack direction='row' spacing={1} alignItems={"flex-start"}>
                        <Typography variant="caption">●</Typography>
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
          </OrderCard>

        ))
      }
    </Layout>
  );
};

export default Done;
