import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
//import './CodeComponent.css'

export default function CodeComponent2({ code }) {
    return (
        /* https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/demo/prism.js */
        <SyntaxHighlighter showLineNumbers={true} language="javascript" style={a11yDark}>
            {code}
        </SyntaxHighlighter>
    )
}
