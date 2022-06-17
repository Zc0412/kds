import dayjs from "dayjs";

/**
 * 时间格式化
 * @param date
 */
export const formatTime = (date: string) => {
  if (!date) return date
  return dayjs(date).format('[@]hh:mm a')
}