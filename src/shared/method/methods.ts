import { ApiResponse, CustomerMessage } from "@/app/interfaces";
import { apiKey, sheetId } from "../constants";

export async function CreateContact(contact: CustomerMessage) {
  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=RAW&key=${apiKey}`,
      {
        method: "POST",
        body: JSON.stringify(contact),
      }
    );

    const payload = (await response.json()) as ApiResponse;
    console.log("PAYLOAD", payload);

    if (payload.ok) {
      alert("OK");
    } else {
      alert(payload.message);
    }
    // alert(message);
  } catch (error) {
    console.log(error);
  }
}
