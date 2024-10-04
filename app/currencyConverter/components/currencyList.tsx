"use client"

import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { Currency } from "../model/currency";

export const CurrencyList = () => {
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
    <>
      <p>Supported Currencies</p>
      <ul style={{ textAlign: "left" }}>
        {currencies.map((currency) => {
          return (
            <li key={currency.CurrencyId}>
              {currency.CurrencyId}, {currency.CurrencyCode}, Rate: {currency.ExchangeRate}
            </li>
          );
        })}
      </ul>
    </>
  );
};