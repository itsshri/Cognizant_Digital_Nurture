import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !currency) {
      alert("Please enter amount and currency");
      return;
    }

    // Example conversion: 1 Euro = 80 INR
    if (currency.toLowerCase() === "euro") {
      const convertedValue = amount * 80;
      alert(`Converting to Euro Amount is ${convertedValue}`);
    } else {
      alert("Please enter 'Euro' as currency");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label>Amount: </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </p>
      <p>
        <label>Currency: </label>
        <textarea
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </p>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CurrencyConvertor;
