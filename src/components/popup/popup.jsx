import React from 'react';
import { useSelector } from 'react-redux';
import Event from '../event/event';
import styles from './popup.module.css';

function Popup() {
  const events = useSelector((store) => store.event.data);
  const reversedEvents = events.slice(-5).reverse();
  return (
    <div className={styles.popup}>
      <div className={styles.popup__triangle} />
      <div className={styles.popup__container}>
        {reversedEvents.map((event, idx) => (
          <Event
            key={idx.toString()} // walkaround. id should come from backend
            title={event.title}
            date={event.date}
          />
        ))}
      </div>
    </div>

  );
}

export default Popup;
