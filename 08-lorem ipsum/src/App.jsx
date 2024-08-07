import { useState } from "react";
import data from './data';

const App = () => {

  const [count, setCount] = useState(1);
  const [text, setText] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (

    <section className="section-center" onSubmit={handleSubmit}>

      <h4>tired of boring lorem ipsum?</h4>

      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          min='1'
          step='8'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
      </article>
    </section>
  );
};

export default App;