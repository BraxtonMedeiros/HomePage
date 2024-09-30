"use client" // Indicating this component is a client-side component
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { Currency } from "../model/currency"; // Importing the Currency model

export const ExchangeCurrency = () => {
  // State to store user input for "From" currency, "To" currency, and amount to exchange
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState("");

  // State to store the final exchange result after calculation
  const [finalExchange, setFinalExchange] = useState("");

  // State to store the list of available currencies from the Firebase database
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  // Get the Firebase Realtime Database instance
  const db = getDatabase();
  const currencyRef = ref(db, "currency/"); // Reference to the "currency/" path in the database

  useEffect(() => {
    // Subscribe to real-time changes in the "currency/" reference
    const unsubscribe = onValue(currencyRef, (snapshot) => {
      const newData = snapshot.val(); // Retrieve the updated data from the database
      // Compare current state with new data to avoid unnecessary updates
      if (JSON.stringify(currencies) !== JSON.stringify(newData)) {
        // Convert the object data into an array of currency objects
        const test = Object.keys(newData).map((key: any) => newData[key]);
        setCurrencies(test); // Update the state with the new currency list
      }
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {/* Header for the exchange currency form */}
      <h2
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Exchange Currency
      </h2>

      {/* Input for the "From" currency */}
      <input
        placeholder="From"
        value={fromCurrency}
        onChange={(e) => {
          setFromCurrency(e.currentTarget.value); // Update state when user changes input
        }}
        style={{
          color: "black", 
          marginRight: "1rem", 
          marginBottom: "1rem",
          borderRadius: "5px", // Rounded corners for better design
        }}
      />

      {/* Input for the "To" currency */}
      <input
        placeholder="To"
        value={toCurrency}
        onChange={(e) => {
          setToCurrency(e.currentTarget.value); // Update state when user changes input
        }}
        style={{
          color: "black",
          marginRight: "1rem",
          marginBottom: "1rem",
          borderRadius: "5px", // Rounded corners
        }}
      />

      {/* Input for the amount to exchange */}
      <input
        placeholder="Amount"
        value={amount}
        onChange={(e) => {
          setAmount(e.currentTarget.value); // Update state when user changes input
        }}
        style={{
          color: "black",
          borderRadius: "5px", // Rounded corners for better design
        }}
      />

      {/* Submit button to perform the currency exchange */}
      <p
        onClick={() => {
          console.log(fromCurrency, toCurrency); // Log inputs for debugging

          // Convert the amount to a number
          const amountNumber = parseInt(amount);

          // Get the exchange rate for the "From" currency
          const fromCurrencyER = currencies.filter(
            (c: Currency) => c.CurrencyCode === fromCurrency
          )[0];

          // Get the exchange rate for the "To" currency
          const toCurrencyER = currencies.filter(
            (c: Currency) => c.CurrencyCode === toCurrency
          )[0];

          // Calculate the exchanged amount
          const result =
            (amountNumber / fromCurrencyER.ExchangeRate) * toCurrencyER.ExchangeRate;

          // Set the result rounded to the nearest thousandths in state
          setFinalExchange(result.toFixed(3));
        }}
        style={{
          backgroundColor: "blue", 
          color: "white", 
          padding: "10px 20px", 
          marginTop: "1rem", 
          marginBottom: "1rem", 
          borderRadius: "5px", // Rounded button
          border: "none", 
          cursor: "pointer", // Change cursor to pointer on hover
          textAlign: "center", 
          fontSize: "16px", 
          fontWeight: "bold", 
          transition: "background-color 0.3s ease", // Smooth hover effect
        }}
      >
        Submit
      </p>

      {/* Display the final exchanged amount */}
      <p
        style={{
          backgroundColor: "red", 
          padding: "20px", 
          borderRadius: "5px", // Rounded corners
          color: "white", // White text for better contrast
        }}
      >
        Exchanged amount: {finalExchange}
      </p>
    </div>
  );
};
