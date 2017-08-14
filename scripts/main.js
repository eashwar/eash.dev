var converter = new showdown.Converter();
converter.setOption('openLinksInNewWindow', true);
converter.setFlavor('github');

var post_url = "https://raw.githubusercontent.com/eashwar/eashwar.github.io/master/posts/";

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