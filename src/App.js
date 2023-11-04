import React, { useState, useEffect } from "react";
import './App.css';
import Editor from "./Editor"
import brace from 'brace';
import { submission } from "./api/RequestMethod";

function App() {
  const [code, updateCode] = useState(``);
  const [dark, updateDark] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('54');
  const [input, setInput] = useState(``);
  const [output, setOutput] = useState(``);

  // <option value="54">C++</option>
  // <option value="50">C</option>
  // <option value="51">C#</option>
  // <option value="62">Java</option>
  // <option value="63">Javascript</option>
  // <option value="71">Python</option>
  // <option value="22">Go</option>
  
  const submitCode = async (e) => {
    e.preventDefault()
    try {
      const response = await submission(selectedLanguage, code, input)
      let stdout = response.stdout;

      if (!stdout) {
        setOutput(response.status['description']);
      }
      else {
        setOutput(atob(stdout))
      }
    }
    catch (err) {

    }
  }

  return (
    <div className="App">
      <div className="editor-wrapper">
        <div className="navbar">
          <label style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            Programming Language:

            <select name="selectedLanguage"
            value={selectedLanguage} // ...force the select's value to match the state variable...
            onChange={e => setSelectedLanguage(e.target.value)} 
            >
              <option value="54">C++</option>
              <option value="50">C</option>
              <option value="51">C#</option>
              <option value="62">Java</option>
              <option value="63">Javascript</option>
              <option value="71">Python</option>
              <option value="22">Go</option>
            </select>
          </label>
          <button
            onClick={e => submitCode(e)}
          >
            Run
          </button>
        </div>
        <div className="editor">
          <Editor
            mode="c_cpp"
            dark={dark}
            onChange={(e) => {
              updateCode(e);
            }}
            value={code}
          />
        </div>
      </div>
      <div className="input-output">
        <div className="input">
          <div className="input-output-div">
            <p className="inp-out-header">Input</p>
          </div>
          <textarea
            value={input}
            onChange={e => {
              setInput(e.target.value)
            }}
          ></textarea>
        </div>
        <div className="input">
          <div className="input-output-div">
            <p className="inp-out-header">Output</p>
          </div>
          <textarea
            value={output}
            readOnly={true}
          ></textarea>
        </div>
          
      </div>
      
    </div>
  );
}

export default App;