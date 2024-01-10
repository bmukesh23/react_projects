import { useState } from 'react';
import people from './data';
import { FaChevronRight, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {

  const [index, setIndex] = useState(0);
  const { image, job, name, text } = people[index];

  return (
    <main>
      <article>
        
      </article>
    </main>
  )

};
export default App;
