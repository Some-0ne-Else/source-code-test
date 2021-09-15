import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../../services/slices/modalSlice';
import eventNotifierImg from '../../../images/event-notifier.png';
import styles from './notifier.module.css';

function Notifier() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.event.unread);
  const toggle = () => {
    dispatch(toggleModal());
  };
  return (
    <div
      className={styles.notifier__wrapper}
      onClick={toggle}
    >
      <img className={styles.notifier} src={eventNotifierImg} alt="notifier" />
      {counter ? (
        <div className={styles.notifier__counter}>
          <p className={styles.notifier__value}>{counter}</p>
        </div>
      ) : null}
    </div>
  );
}

export default Notifier;
