import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEvent, markAllRead, deleteAllEvents,
} from '../../services/slices/eventSlice';
import { toggleModal } from '../../services/slices/modalSlice';
import styles from './form.module.css';

function Form() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');
  // eslint-disable-next-line prefer-spread
  const maxId = useSelector((store) => Math.max.apply(
    Math, store.event.data.map((obj) => obj.id),
  ));
  console.log(maxId);
  const onSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toJSON();
    dispatch(addEvent({ title: inputValue, date, unread: true }));
    setInputValue('');
  };
  const markAll = () => {
    dispatch(markAllRead());
  };
  const deleteAll = () => {
    dispatch(deleteAllEvents());
  };
  const toggle = () => {
    dispatch(toggleModal());
  };
  return (
    <form className={styles.form} onSubmit={(e) => onSubmit(e)}>
      <div className={styles.form__wrapper}>
        <input
          className={styles.form__input}
          type="text"
          placeholder="Введите название события..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={`${styles.form__button} ${styles.form__button_small}`} type="submit">Отправить</button>
      </div>
      <button className={styles.form__button} type="button" onClick={markAll}>Пометить все события прочитанными</button>
      <button className={styles.form__button} type="button" onClick={deleteAll}>Удалить все события</button>
      <button className={styles.form__button} type="button" onClick={toggle}>Скрыть / показать попап с нотификацией</button>
    </form>
  );
}

export default Form;
