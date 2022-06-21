import React, {createContext} from 'react';
import {animated, useSpring} from "@react-spring/web";
import {useDrag} from "@use-gesture/react";

type OrderCardDragProps = {
  children?: React.ReactNode;
  enabled: boolean
}

export const DragContext = createContext<any>(null!)

const OrderCardDrag: React.FC<OrderCardDragProps> = ({enabled = false, children}) => {
  const [{x, y, scale, zIndex}, api] = useSpring(() => ({x: 0, y: 0, scale: 1, zIndex: 0}))
  const bind = useDrag(
    ({down, movement: [mx, my]}) => {
      if (mx < -50) {
        console.log('done')
        console.log(mx)
      }
      api.start({x: down ? mx : 0, y: down ? my : 0, scale: down ? 1.02 : 1, zIndex: down ? 1 : 0})
    },
    {enabled: enabled}
  )
  return (
    <DragContext.Provider value={bind()}>
      <animated.div style={{x, y, scale, zIndex, touchAction: "none"}}>
        {children}
      </animated.div>
    </DragContext.Provider>
  );
};

export default OrderCardDrag;