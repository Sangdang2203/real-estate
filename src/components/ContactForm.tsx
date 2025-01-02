export default function ContactForm() {
  return (
    <>
      <div className="card">
        <div className="input-div">
          <input type="text" className="input" placeholder="Email" />
        </div>
        <div className="input-div">
          <input className="input" type="text" placeholder="Phone" />
        </div>
        <div className="input-div">
          <input className="input" type="text" placeholder="Message" />
        </div>
        <div className="button-div">
          <button className="submit">Submit</button>
        </div>
      </div>
    </>
  );
}
