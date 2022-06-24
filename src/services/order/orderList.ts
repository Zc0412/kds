import {request} from "../../utils/request";

export async function queryOrderList() {
  return request({
    method:"GET",
    url:'/orderList',
  })
}
