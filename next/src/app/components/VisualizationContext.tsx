"use client"
import React, { useState, FormEvent } from 'react';
import { useGlobal } from './GlobalContextProvider';


const VisualizationContext = () => {
  const { stocks, updateStock, resetStocks, removeStock } = useGlobal();
  const [ticker, setTicker] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  const handleUpdate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form from submitting the traditional way
    const updatedStock = { ticker, value, time };
    if (index >= 0 && index < stocks.length) {
      updateStock(index, updatedStock);
    } else {
      alert('Invalid index.');
    }
  };

  const handleRemoveStock = () => {
    if (index >= 0 && index < stocks.length) {
      removeStock(index);
    } else {
      alert('Invalid index for removal.');
    }
  };

  const handleResetStocks = () => {
    resetStocks();
  };  
  
  return (
    <div>
      <div>
        <form onSubmit={handleUpdate} className='space-y-4'>
          <input
            type="text"
            placeholder="Ticker"
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="border px-2 py-1 bg-black"
          />
          <input
            type="text"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border px-2 py-1 bg-black"
          />
          <input
            type="text"
            placeholder="Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border px-2 py-1 bg-black"
          />
          <div className="flex space-x-2">
            <select
              value={index}
              onChange={(e) => setIndex(parseInt(e.target.value))}
              className="border px-2 py-1 bg-black"
            >
              {Array.from({ length: stocks.length }, (_, i) => (
                <option key={i} value={i}>{i}</option>
              ))}
            </select>
            <button type="button" onClick={handleRemoveStock} className="bg-red-500 text-white px-4 py-2">Remove Stock</button>
          </div>
          <button type="button" onClick={handleResetStocks} className="bg-green-500 text-white px-4 py-2 mt-4">Reset Stocks</button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">Update Stock</button>
        </form>
      </div>

      <div className='border-2 text-lg'>
        {stocks.map((stock, index) => (
          <div key={index}>
            <p>Ticker: {stock.ticker}</p>
            <p>Value: {stock.value}</p>
            <p>Time: {stock.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualizationContext;
