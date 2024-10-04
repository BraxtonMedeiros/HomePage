import firebase_app from "../firebaseConfig";
import { getDatabase, ref, get, child } from "firebase/database";

export const checkCurrencyExists = async (currencyCode: any) => {
  firebase_app;
  const db = getDatabase();
  const dbRef = ref(db);
  
  try {
    // Fetch all currencies and check if any have the given currencyCode
    const snapshot = await get(child(dbRef, "currency"));
    if (snapshot.exists()) {
      const currencies = snapshot.val();
      // Iterate over the currencies to see if any have the same currencyCode
      for (const key in currencies) {
        if (currencies[key].CurrencyCode === currencyCode) {
          return true; // Currency code already exists
        }
      }
    }
    return false; // Currency code doesn't exist
  } catch (error) {
    console.error("Error checking currency:", error);
    return false; // Handle error by returning false
  }
};
