import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topics from './ArrayTopics';
import Industries from './ArrayIndustries';

function App() {
  const [count, setCount] = useState(0);
  const [useFixedTopics, setUseFixedTopics] = useState(false);
  const [fixedTopic, setFixedTopic] = useState('');
  const [currentTopic, setCurrentTopic] = useState('');
  const [useFixedIndustries, setUseFixedIndustries] = useState(false);
  const [fixedIndustries, setFixedIndustries] = useState('');
  const [currentIndustries, setCurrentIndustries] = useState('');

  const GlobalStyle = createGlobalStyle`
    ${reset}
    /* other styles */
    *, *::after, *::before {
      box-sizing: border-box;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-smoothing: antialiased;
    }
  `;

  function randomExtract(targetArray: string[]): string {
    return targetArray[Math.floor(Math.random() * targetArray.length)];
  }

  function handleTopicCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setFixedTopic(currentTopic);
      setUseFixedTopics(true);
    } else {
      setFixedTopic('');
      setUseFixedTopics(false);
    }
  }

  function handleIndustriesCheck(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.checked) {
      setFixedIndustries(currentIndustries);
      setUseFixedIndustries(true);
    } else {
      setFixedIndustries('');
      setUseFixedIndustries(false);
    }
  }

  function handleButtonClick() {
    setCurrentTopic(randomExtract(Topics));
    setCurrentIndustries(randomExtract(Industries));
    setCount(count + 1);
  }

  useEffect(() => {
    setCurrentTopic(randomExtract(Topics));
    setCurrentIndustries(randomExtract(Industries));
  }, []);

  return (
    <div className="">
      <GlobalStyle />
      <main className="container py-5 col-12">
        <h1 className="h1 text-center mb-4 pb-4">random-business-category-selector</h1>

        <div className="display-4 text-center mt-4 alert alert-info">
          <div className="fw-bold">{useFixedIndustries ? fixedIndustries : currentIndustries}</div>
            ✕
          <div className="fw-bold">{useFixedTopics ? fixedTopic : currentTopic}</div>
        </div>
      </main>
      <section className="d-flex justify-content-center gap-4 pb-4">
        <div>
          <input
            type="checkbox"
            className="form-check-input mt-0 me-1"
            id="Industries_check"
            checked={useFixedIndustries}
            onChange={handleIndustriesCheck}></input>
          <label className="form-check-label" htmlFor="Industries_check">
            業界を固定
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            className="form-check-input mt-0 me-1"
            id="Topics_check"
            checked={useFixedTopics}
            onChange={handleTopicCheck}></input>
          <label className="form-check-label" htmlFor="Topics_check">
            トピックを固定
          </label>
        </div>
      </section>
      <section>
        <button type="button" onClick={handleButtonClick} className="btn btn-primary btn-lg w-50 d-block mx-auto mt-4">
          🔀
        </button>
      </section>
      <div className="col-12 position-absolute bottom-0 px-3 mb-4">
      </div>
      <span className="d-none">{count}</span>
    </div>
  );
}

export default App;
