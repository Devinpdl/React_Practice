import { useState } from 'react'
import { InputField } from './components'
//We're importing the things from index.js in components folder
import useCurrencyInfo from './customhooks/ourCurrencyInfo'
//Now, we need to set states inside the App function


function App() {
 const [amount, setAmount] = useState(0);
 //Also we need to use state for input npr to usd..
 const [inputTypeFrom, setInputTypeFrom] = useState('usd');
 const [inputTypeTo, setInputTypeTo] = useState('npr');
 //We also need state inside of the converted value
 const [convertedAmount, setConvertedAmount] = useState(0);

 //Now we do use hook that we've created earlier as custom hook
 const currencyInfo = useCurrencyInfo(inputTypeFrom);
 //We need currency inside useCurrencyInfo so we give value which we need conversion from that which
 //is inputTypeFrom
 // currencyInfo will be in the form of keys and value, 
 //options given to users will be the keys, to take out all keys from object..

 const options= Object.keys(currencyInfo);
 //Here, we passed currencyInfo and the methods Object.keys generate all the keys from it and
 //stored it inside variable options..

 //Now, to swap variable that's 'from' to 'To';
 const handleSwap = () =>{
  setInputTypeFrom(inputTypeTo);
  setInputTypeTo(inputTypeFrom);
  setConvertedAmount(amount);
  setAmount(convertedAmount);
  //This setAmount(convertedAmount); will change amount back to what is was before swapping
}
//Now, to show the final results..
// setConvertedValue(amount  * currencyData[inputTypeTo]);
//We wrap it inside the function..
const updateConversion = () =>{
    setConvertedAmount( amount * currencyInfo[inputTypeTo]);
}
return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://www.pixelstalk.net/wp-content/uploads/2016/03/Money-euro-banknotes-coins-wallpaper-HD.jpg')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      updateConversion()
                  }}
              >
                  <div className="w-full mb-1">
                      <InputField
                          label="From"
                          amount={amount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setAmount(amount)}
                          selectCurrency={inputTypeFrom}
                          onAmountChange={(amount) => setAmount(amount)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                    {/* // Swap Button Styles */}
                      <button
                          type="button"
                          className="swap-button absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 transition duration-300 ease-in-out"
                          onClick={handleSwap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputField
                          label="To"
                          amount={convertedAmount}
                          currencyOptions={options}
                          onCurrencyChange={(currency) => setInputTypeTo(currency)}
                          selectCurrency={inputTypeTo}
                          amountDisable
                      />
                  </div>
                  <button type="submit" className="convert-button w-full bg-blue-600 text-white px-4 py-3 rounded-lg transition duration-300 ease-in-out">
                      Convert {inputTypeFrom.toUpperCase()} to {inputTypeTo.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
