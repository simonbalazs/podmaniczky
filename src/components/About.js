import React from 'react';
import ReactMarkdown from "react-markdown";
import '../style.css';


const md = `
# H1 Heading

Enable typographer option to see result.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis dui sapien. Ut semper semper arcu ac luctus. Nulla a metus tortor. Praesent finibus suscipit lorem sed aliquam. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum venenatis libero, et elementum nulla ullamcorper non. Etiam consequat mollis rhoncus. In quis bibendum metus.

Etiam hendrerit sapien at est rhoncus, nec posuere velit hendrerit. Praesent rhoncus nisl eu orci elementum, et bibendum dolor laoreet. Etiam ex metus, ultrices quis ex a, porta molestie nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam semper sem leo, nec cursus metus pellentesque nec. Sed hendrerit nisl sit amet fermentum feugiat. Sed porttitor nisi porta erat dictum iaculis. Aenean laoreet nec lacus in tempus. Quisque aliquet consectetur nulla nec venenatis. Aenean arcu felis, varius ut dolor vitae, viverra vulputate est. Proin ut scelerisque massa, quis maximus magna.

Donec eu efficitur lectus. Donec eu convallis urna. Aenean in mi ac ante dictum pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc interdum quam justo, non mattis enim pretium eget. Fusce tincidunt lacus in erat gravida iaculis. Nam eget venenatis eros, sed finibus risus. Sed ultrices lobortis ipsum, vel tincidunt lacus fermentum a. Quisque nec malesuada est.

Morbi sed libero consequat, porta leo in, ullamcorper nulla. Morbi finibus mauris vel lacinia dignissim. Nam imperdiet, leo vel finibus cursus, tortor augue facilisis purus, sed semper nisl nibh a mauris. Duis lacinia ante tellus, eu porta diam ultricies in. Sed quis lobortis tortor. Vivamus sit amet felis in tellus sollicitudin suscipit a nec mauris. In placerat semper sapien, et condimentum diam ornare quis. Fusce ornare pulvinar est quis vehicula. Aliquam ultrices mollis urna et vestibulum. Nam auctor nibh purus. Maecenas sagittis dui in justo malesuada aliquet. Phasellus dictum ligula vel est cursus malesuada. Mauris venenatis iaculis velit at cursus.

Aliquam iaculis, purus sed suscipit aliquet, nisl arcu consequat sem, quis gravida tortor lectus sit amet orci. In

(c) (C) (r) (R) (tm) (TM) (p) (P) +-
`

const About = (props) => (
    <div id="about">
        <button class="x" onClick={props.toggleInfo}>
            x
        </button>
        <ReactMarkdown
            source={md}
            />

    </div>

)

export default About;