import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface Props {
  text: string;
  className?: string;
}

export default function LatexText({ text, className = "" }: Props) {
  const createMarkup = (htmlString: string) => {
    if (!htmlString) return { __html: "" };
    
    // Replace block math
    let parsed = htmlString.replace(/\\\[([\s\S]*?)\\\]/g, (match, math) => {
      try {
        return katex.renderToString(math, { displayMode: true, throwOnError: false });
      } catch (e) {
        return match;
      }
    });

    // Replace inline math
    parsed = parsed.replace(/\\\(([\s\S]*?)\\\)/g, (match, math) => {
      try {
        return katex.renderToString(math, { displayMode: false, throwOnError: false });
      } catch (e) {
        return match;
      }
    });

    return { __html: parsed };
  };

  return <span className={className} dangerouslySetInnerHTML={createMarkup(text)} />;
}
