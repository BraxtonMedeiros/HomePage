"use client"
import { useState } from "react";
import { writeCurrency } from "../db/writeCurrency";

export const CreateCurrency = () => {
const [currencyId, setCurrencyID] = useState("");
const [currencyCode, setCurrencyCode] = useState("");
const [exchangeRate, setExchangeRate] = useState("");

    return (
    <div>
        <h2 style=
        {{
          marginTop: "1rem",
          marginBottom: "1rem",
          textAlign: "center"
        }}
        >Create Currency</h2>
        <input
          placeholder="Currency ID"
          value={currencyId}
          onChange={(e) => {
            setCurrencyID(e.currentTarget.value);
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
          placeholder="Currency Code"
          value={currencyCode}
          onChange={(e) => {
            setCurrencyCode(e.currentTarget.value);
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
          placeholder="Exchange Rate"
          value={exchangeRate}
          onChange={(e) => {
            setExchangeRate(e.currentTarget.value);
          }}
          style=
          {{
            color: "black",
            borderRadius: "5px"

          }}
        />
        <p
          onClick={() => {
            writeCurrency({
                CurrencyId: parseInt(currencyId),
                CurrencyCode: currencyCode,
                ExchangeRate: parseFloat(exchangeRate),
              })
              setCurrencyID("")
              setCurrencyCode("")
              setExchangeRate("")
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
    </div>

)
}