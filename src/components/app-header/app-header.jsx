import React from 'react';
import Notifier from '../ui/notifier/notifier';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <Notifier />
    </header>
  );
}

export default AppHeader;
