declare namespace API {
  /**
   * 菜单
   */
  type DishList = {
    name: string;
    quantity: string;
    specification: string[];
    status: 'done' | 'doing';
    dish_id: number;
  }
  /**
   * 订单
   */
  type OrderListData = {
    pick_up: boolean;
    number: number;
    date_time: string;
    name: string;
    remark: string;
    status: 'done' | 'doing';
    dish_list: DishList[];
    level: 'low' | 'middle' | 'high';
    id: number;
  }
}