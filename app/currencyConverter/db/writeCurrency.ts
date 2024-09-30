import firebase_app from "../firebaseConfig";
import { Currency } from "../model/currency";
import { getDatabase, set, ref } from "firebase/database";

export const writeCurrency = (currency: Currency) => {
    firebase_app
    const db = getDatabase();
    set(ref(db, "currency/" + currency.CurrencyId), {
      ...currency,
    });
  };