
import { useEffect, useState } from 'react';
import './App.css'
import userCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox';

function App() {

  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const data = userCurrencyInfo(from);
  const currencies = Object.keys(data);

  const swap = () => {
    if (convertedAmount !== "") {
      setAmount(convertedAmount);
      setConvertedAmount(amount);
    }

    setFrom(to);
    setTo(from);
  }

  const convert = () => {
    let newAmount = amount * data[to];
    newAmount = newAmount.toFixed(0);
    setConvertedAmount(newAmount);
  }


  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        }}
      >
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();

              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencies={currencies}
                  onAmountChange={(amount) => setAmount(amount)}
                  currency={from}
                  onCurrencyChange={(from) => setFrom(from)}
                  isReadOnly={false}

                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  onClick={swap}
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencies={currencies}
                  onAmountChange={(convertedAmount) => setConvertedAmount(convertedAmount)}
                  onCurrencyChange={(to) => setTo(to)}
                  currency={to}
                  isReadOnly={true}

                />
              </div>
              <button onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
