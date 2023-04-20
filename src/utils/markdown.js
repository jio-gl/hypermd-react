import { marked } from 'marked';
import hljs from "highlight.js";

marked.setOptions({
  highlight: function (code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
    return hljs.highlight(validLanguage, code).value;
  },
});

export function renderMarkdown(input, output) {
  const markdownText = input.value;
  const html = marked(markdownText);
  output.innerHTML = html;
}

