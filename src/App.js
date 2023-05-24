import React from 'react';
import { Toaster } from 'react-hot-toast';
import PageTitle, { PageSubTitle } from './components/PageTitle';
import AppHeader from './components/AppHeader';
// getting style from app.module.scss
import styles from './styles/modules/app.module.scss';
import AppContent from './components/AppContent';

function App() {
  return (
    <>
      <div className="container">
        <PageTitle>TODO LIST</PageTitle>
        <PageSubTitle>What's the plan for today?</PageSubTitle>
        <div className={styles.app__wrapper}>
          <AppHeader />
          <AppContent />
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: { fontSize: '1.5rem' },
        }}
      />
    </>
  );
}

export default App;
