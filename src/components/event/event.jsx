import React from 'react';
import PropTypes from 'prop-types';
import { parseISO, formatDistanceToNow } from 'date-fns';
import ru from 'date-fns/locale/ru';
import styles from './event.module.css';

function Event({ title, date }) {
  return (
    <div className={styles.event}>
      <p className={styles.event__title}>{title}</p>
      <p className={styles.event__date}>
        {formatDistanceToNow(parseISO(date), {
          addSuffix: true,
          includeSeconds: true,
          locale: ru,
        })}
      </p>
    </div>
  );
}

export default Event;

Event.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
