import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../form/form';
import Popup from '../popup/popup';
import styles from './main.module.css';
import { getEvents, postEvent } from '../../services/slices/eventSlice';

function Main() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getEvents());
    const timer = setInterval(() => dispatch(postEvent({ title: 'Название', date: new Date().toJSON(), unread: true }))
      .then(() => dispatch(getEvents())), 5000);
    return () => { clearInterval(timer); };
  }, []);
  const modalOpened = useSelector((store) => store.modal.modalOpened);
  return (
    <main className={styles.main}>
      <Form />
      {modalOpened && <Popup />}
    </main>
  );
}

export default Main;
