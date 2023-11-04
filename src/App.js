import React, { useState, useEffect } from "react";
import './App.css';
import Editor from "./Editor"
import { quantum } from 'ldrs';
import { submission } from "./api/RequestMethod";
import "./customScrollbar/CustomScrollbar.css"

quantum.register()

function App() {
  const [code, updateCode] = useState(``);
  const [dark, updateDark] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('54');
  const [input, setInput] = useState(``);
  const [output, setOutput] = useState(``);

  const language_name = {
    54 : "c_cpp",
    50 : "c_cpp",
    51 : "csharp",
    62 : "java",
    63 : "javascript",
    71 : "python",
    22 : "golang"
  }
  
  const submitCode = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await submission(selectedLanguage, code, input)
      let stdout = response.stdout;

      if (!stdout) {
        setOutput(response.status['description']);
      }
      else {
        setOutput(atob(stdout))
      }
      setLoading(false)
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
            mode={language_name[selectedLanguage]}
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
            placeholder="Your input..."
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
          {loading ? (
            <div
              style={{
                height: "90%",
                width: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <l-quantum
                size = "45"
                speed = "1.75"
                color = "white"
              ></l-quantum>
            </div>
            ) : (
            <textarea
              value={output}
              readOnly={true}
            ></textarea>
            )
          }
        </div> 
      </div>
    </div>
  );
}

export default App;