import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Quais os seus objetivos?
        </p>
        <Button>
          Reserva de emergência
        </Button>
        <Button>
          Adquirir um bem
        </Button>
        <Button>
          Independência financeira
        </Button>
      </header>
    </div>
  );
}

export default App;
