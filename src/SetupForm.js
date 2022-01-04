import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="form-control">
          <h2>setup quiz</h2>

          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              className="form-input"
              type="number"
              min={1}
              max={50}
              id="amount"
              name="amount"
              value={quiz.amount}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              className="form-input"
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="generalknowledge">general knowledge</option>
              <option value="art">art</option>
              <option value="geography">geography</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="difficulty">difficulty</label>
            <select
              className="form-input"
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option className="easy">easy</option>
              <option className="medium">medium</option>
              <option className="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Can't resolve the option. Please chose another one.
            </p>
          )}
          <button onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
