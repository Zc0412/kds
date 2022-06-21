import React from 'react';
import styles from "./Loading.module.css";

// loading
const Loading:React.FC = () => {
 return (
   <div className={`${styles.loading}`}>
     <div className={styles.loader}>
       loading
     </div>
   </div>
 );
};

export default Loading;