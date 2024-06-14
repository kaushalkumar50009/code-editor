import { useEffect } from 'react'
import './syntax-highlighter.css'
import Prism from 'prismjs'

export default function SyntaxHighlighter({ children }) {
  useEffect(() => {
    Prism.highlightAll()
  }, [children])

  return (
    <>
      <h3>Syntax Will Be Automatically Highlighted</h3>
      <pre>
        <code className="language-javascript">{children}</code>
      </pre>
    </>
  )
}
