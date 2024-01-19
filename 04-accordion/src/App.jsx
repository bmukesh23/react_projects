import { useState } from 'react';
import data from './data'
import Questions from './Questions';

const App = () => {

  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestions = (id) => {
    const newActivated = id === activeId ? null : id;
    setActiveId(newActivated);
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        toggleQuestions={toggleQuestions}
      />
    </main>
  );
};
export default App;
