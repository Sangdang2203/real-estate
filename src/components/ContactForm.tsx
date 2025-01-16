import React, { FormEvent } from "react";

export default function ContactForm() {
  const sheetId = "1I2aOeoX0xtkpghx4eZWc-CVzJirysQaBoC7HWjCMS-Y";
  const apiKey = "AIzaSyC0PW5-RwhC8XR5IUHY2yCBn66LP1IVM4c";
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = (target[0] as HTMLInputElement).value;
    const phone = (target[1] as HTMLInputElement).value;
    const message = (target[2] as HTMLInputElement).value;

    const data = {
      values: [[email, phone, message]],
    };

    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1:append?valueInputOption=RAW&key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log(response);

      console.log("Data: ", data);
      alert("Dữ liệu đã được gửi thành công!");
    } catch (error) {
      console.error("Có lỗi xảy ra:", error);
      alert("Gửi dữ liệu không thành công.");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="flex">
        <div className="input-div flex items-center">
          <input type="email" className="input" placeholder="Email" required />
        </div>
        <div className="input-div">
          <input className="input" type="text" placeholder="Phone" required />
        </div>
        <div className="input-div">
          <input className="input" type="text" placeholder="Message" required />
        </div>
      </div>

      <div className="button-div">
        <button className="submit">Submit</button>
      </div>
    </form>
  );
}
