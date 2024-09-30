import Image from "next/image";
import React from "react";
import { CreateCurrency } from "./components/createCurrency";
import { CurrencyList } from "./components/currencyList";
import { ExchangeCurrency } from "./components/exchangeCurrency";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 style=
        {{
          marginTop: "1rem",
          marginBottom: "1rem",
          textAlign: "center"
        }}
        >Currency Converter</h1>
        <CreateCurrency/>
        <CurrencyList/>
        <ExchangeCurrency/>
      </div>
    </main>
  );
}
