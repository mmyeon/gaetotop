// TODO: 사용하는데가 없음. styeld-components의 glabol 적용하는 방법 찾아서 적용하기.

import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
code,
img,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
legend,
caption {
  margin: 0;
  padding: 0;
  border: 0;
}
div,
span,
article,
section,
header,
footer,
p,
ul,
li,
fieldset,
legend,
label,
a,
nav {
  box-sizing: border-box;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}



`;

export default Globalstyle;
