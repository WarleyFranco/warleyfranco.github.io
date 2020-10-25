import marked from 'marked'
import sanitizeHtml from 'sanitize-html'

const parseMarkdown = (markdown: string): string => {
  return sanitizeHtml(marked(markdown))
}

export default parseMarkdown
