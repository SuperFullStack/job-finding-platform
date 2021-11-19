import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpense from './components/IncomeExpense'
import Transactionlist from './components/Transactionlist'


function App() {
  return (
    <div>
      <Header/>
        <div class="container">
            <Balance/>
            <IncomeExpense/>
            <Transactionlist/>
        </div>
    </div>
  );
}

export default App;
