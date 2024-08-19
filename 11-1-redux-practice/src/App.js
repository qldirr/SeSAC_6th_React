import { useDispatch, useSelector } from 'react-redux'
import {useState} from 'react'
import { deposit, withdrawal } from './store/bankSlice';

function App() {
  const balance = useSelector((state) => state.bank.balance)
  console.log('balace', balance);
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(0)

  const handleDeposit = () => {
    dispatch(deposit(Number(amount)))
    setAmount(0)
  }

  const handleWithdrawal = () => {
    dispatch(withdrawal(Number(amount)))
    setAmount(0)
  }

  return (
    <div className="App">
      <h1>코딩온 은행</h1>
      <br />
      <h2>잔액 : {balance} 원</h2>
      <br />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
      <button onClick={handleDeposit}>입금</button>
      <button onClick={handleWithdrawal}>출금</button>
    </div>
  );
}

export default App;
