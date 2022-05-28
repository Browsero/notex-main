import React, { useState } from "react";
import styled from "styled-components";
import Markdown from "react-remarkable";

function Editor() {
  const [text, setText] = useState("");
  return (
    <EditorContainer>
      <div className="flex flex-col gap-16 h-96 lg:flex-row max-w-sm mx-auto mt-8 lg:max-w-none lg:h-full lg:mt-0 lg:w-3/4">
        <textarea
          className="bg-zinc-200 resize-none p-8 h-3/4 shadow-lg rounded-lg  lg:h-screen lg:w-1/2"
          onChange={(event) => setText(event.target.value)}
        />
        <div className="h-1/6 lg:w-1/2 lg:overflow-auto lg:max-h-screen break-words">
          <Markdown source={text} />
        </div>
      </div>
      
    </EditorContainer>
  );
}

export default Editor;

const EditorContainer = styled.div`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: " (" attr(href) ")";
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    a[href^="#"]:after,
    a[href^="javascript:"]:after {
      content: "";
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  pre,
  code {
    font-family: Menlo, Monaco, "Courier New", monospace;
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: scroll;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  .modest-no-decoration {
    text-decoration: none;
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .modest-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .modest-h1,
  h2,
  .modest-h2,
  h3,
  .modest-h3,
  h4,
  .modest-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .modest-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2,
  .modest-h2 {
    font-size: 2.827rem;
  }

  h3,
  .modest-h3 {
    font-size: 1.999rem;
  }

  h4,
  .modest-h4 {
    font-size: 1.414rem;
  }

  h5,
  .modest-h5 {
    font-size: 1.121rem;
  }

  h6,
  .modest-h6 {
    font-size: 0.88rem;
  }

  small,
  .modest-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);

  @import url(http://fonts.googleapis.com/css?family=Arimo:700,700italic);

  html {
    font-size: 18px;
    max-width: 100%;
  }

  body {
    color: #444;
    font-family: "Open Sans Condensed", sans-serif;
    font-weight: 300;
    margin: 0 auto;
    max-width: 48rem;
    line-height: 1.45;
    padding: 0.25rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arimo, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3 {
    border-bottom: 2px solid #fafafa;
    margin-bottom: 1.15rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  blockquote {
    border-left: 8px solid #fafafa;
    padding: 1rem;
  }

  pre,
  code {
    background-color: #fca5a5;
    border-radius: 5px;
    padding: 4px;
    color: #dc2626;
    font-weight: bold;
  }
`;
