var converter = new showdown.Converter();
converter.setOption('openLinksInNewWindow', true);
converter.setFlavor('github');

var info_box_text =
`
## hello!
I'm a freshman at the University of Michigan. My interests include:
* computer science
* computer music
* clarinet and piano performance
* speedrunning

On this website you can find links to my profiles on various platforms, as well as my [resume](https://resume.creddle.io/resume/1r07ere59ch).
`;
var info_box_html = converter.makeHtml(info_box_text);


var post_one =
  `
## [first post: learning](./posts/post1.html)

I'm writing this post using [\`showdown\`](https://github.com/showdownjs/showdown)!
It's a javascript library that parses markdown files and inserts them as html.
>"Showdown: it works!"
-the unofficial tag of showdown

\`\`\`
function test() {
 console.log("success");
}
\`\`\`

I'll probably post here more often later, and probably set up an actual blogsite. Until then, this is empty!
`;
var post_one_html = converter.makeHtml(post_one);
