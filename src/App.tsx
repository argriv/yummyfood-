import React, {FC,} from 'react';
import AppRouter from './components/AppRouter';
import Header from './components/Smart/Header';

const App:FC = () => {
      return (
        <div className="wrapper">
            <Header/>
          <div className="container">
            <AppRouter/>
          </div>
        </div>
  );
};
export default App;