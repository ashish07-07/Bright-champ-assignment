// components/AddQuiz.tsx
import { useState } from "react";
import axios from "axios";

const AddQuiz = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], answer: "" },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], answer: "" },
    ]);
  };

  const handleChange = (
    index: number,
    field: string,
    value: string | string[]
  ) => {
    const newQuestions = [...questions];
    (newQuestions[index] as any)[field] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // try {
    //   await axios.post('/api/quiz', { title, questions });
    //   setTitle('');
    //   setQuestions([{ question: '', options: ['', '', '', ''], answer: '' }]);
    // } catch (error) {
    //   console.error('Error adding quiz', error);
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Quiz Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      {questions.map((q, index) => (
        <div key={index}>
          <label>Question</label>
          <input
            type="text"
            value={q.question}
            onChange={(e) => handleChange(index, "question", e.target.value)}
            required
          />
          <label>Options</label>
          {q.options.map((opt, optIndex) => (
            <input
              key={optIndex}
              type="text"
              value={opt}
              onChange={(e) => {
                const newOptions = [...q.options];
                newOptions[optIndex] = e.target.value;
                handleChange(index, "options", newOptions);
              }}
              required
            />
          ))}
          <label>Answer</label>
          <input
            type="text"
            value={q.answer}
            onChange={(e) => handleChange(index, "answer", e.target.value)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
      <button type="submit">Save Quiz</button>
    </form>
  );
};

export default AddQuiz;
