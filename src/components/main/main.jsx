import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from '../form/form';
import Popup from '../popup/popup';
import styles from './main.module.css';
import data from '../../utils/mock-data.json';
import { getEvents, addEvent } from '../../services/slices/eventSlice';
import generateName from '../../utils/utils';

function Main() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getEvents(data));
    const timer = setInterval(() => dispatch(
      addEvent({ title: generateName(), date: new Date().toJSON(), unread: true }),
    ), 2000);
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
