import React from 'react';
import ReactMarkdown from "react-markdown";
import '../style.css';


const md = `# h1 Heading 8-)
## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-`

const About = (props) => (
    <div id="about">
        <ReactMarkdown
            source={md}
            />

        <button onClick={props.toggleInfo}>
            x
        </button>
    </div>

)

export default About;