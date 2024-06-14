import { useState } from 'react'
import 'prismjs/themes/prism.css'
import '../../App.css'
import SyntaxHighlighter from '../../components/syntax-highlighter'

function CodeEditor() {
  let defaultValue = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
 }
ReactDOM.render(<App />, document.getElementById("root"));`

  const [code, setCode] = useState(defaultValue)

  const handleChange = (e) => {
    setCode(e.target.value)
  }

  return (
    <>
      <h2>Type your code here !</h2>
      <textarea className="textarea" rows={15} cols={70} spellCheck="false" value={code} onChange={handleChange} />
      <SyntaxHighlighter>{code}</SyntaxHighlighter>
    </>
  )
}

export default CodeEditor
