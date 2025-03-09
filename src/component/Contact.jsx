import React, { useState } from "react";

const Contact = () => {
  let [naame, setnaame] = useState("initial");

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="abc"
              onChange={(e) => setnaame(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="abc@xyz.com" />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input type="Text" placeholder="Tell us about your query ..." />
          </div>
          <button onClick={(e) => { e.preventDefault(); console.log(naame); }}>
            Send
          </button>
          <p>{naame}</p>
        </form>
      </main>
    </div>
  );
};

export default Contact;
