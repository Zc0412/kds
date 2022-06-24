import {request} from "../../utils/request";

export async function queryOrderListDone() {
  return request({
    method:"GET",
    url:'/orderListDone',
  })
}
