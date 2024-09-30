"use client"
import { useEffect, useState } from "react";
import { getDatabase, onValue, ref } from "firebase/database";
import { Currency } from "../model/currency";

export const ExchangeCurrency = () => {
const [fromCurrency, setFromCurrency] = useState("");
const [toCurrency, setToCurrency] = useState("");
const [amount, setAmount] = useState("");

const [finalExchange, setFinalExchange] = useState("");

const [currencies, setCurrencies] = useState<Currency[]>([]);
  const db = getDatabase();
  const currencyRef = ref(db, "currency/");
useEffect(() => {
    const unsubscribe = onValue(currencyRef, (snapshot) => {
      const newData = snapshot.val();
      if (JSON.stringify(currencies) !== JSON.stringify(newData)) {
        const test = Object.keys(newData).map((key: any) => newData[key]);
        setCurrencies(test);
      }
    });
    return () => unsubscribe();
  }, []);

    return (
    <div>
        <h2 style=
        {{
          marginTop: "1rem",
          marginBottom: "1rem",
          textAlign: "center"
        }}
        >Exchange Currency</h2>
        <input
          placeholder="From"
          value={fromCurrency}
          onChange={(e) => {
            setFromCurrency(e.currentTarget.value);
          }}
          style=
          {{
            color: "black", 
            marginRight: "1rem", 
            marginBottom: "1rem",
            borderRadius: "5px"
          }}
        />
         <input
          placeholder="To"
          value={toCurrency}
          onChange={(e) => {
            setToCurrency(e.currentTarget.value);
          }}
          style={{
            color: "black",marginRight: "1rem", 
            marginBottom: "1rem",
            borderRadius: "5px"
          }}
        />
         <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.currentTarget.value);
          }}
          style=
          {{
            color: "black",
            borderRadius: "5px"

          }}
        />

        <p
          onClick={() => {
            console.log(fromCurrency, toCurrency)
            //amount * fromCurrencyER * toCurrencyEr
            const amountNumber = parseInt(amount);
            const fromCurrencyER = currencies.filter((c:Currency) => c.CurrencyCode === fromCurrency)[0]
            const toCurrencyER = currencies.filter((c:Currency) => c.CurrencyCode === toCurrency)[0]
            const result = (amountNumber/fromCurrencyER.ExchangeRate) * toCurrencyER.ExchangeRate

            setFinalExchange(result.toString())
          }
          }
          style={{
            backgroundColor: "blue", 
            color: "white", 
            padding: "10px 20px",
            marginTop: "1rem",
            marginBottom: "1rem", 
            borderRadius: "5px", 
            border: "none", 
            cursor: "pointer", 
            textAlign: "center", 
            fontSize: "16px", 
            fontWeight: "bold",
            transition: "background-color 0.3s ease",
          }}
        >
          Submit
        </p>
        <p style=
        {{
          backgroundColor: "red", 
          padding: "20px",
          borderRadius: "5px"

        }}>
            Exchanged amount: {finalExchange}
        </p>
        
    </div>

)
}