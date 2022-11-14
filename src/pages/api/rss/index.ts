import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import feed from './feed.json'
import { slugWithoutExtension } from '~/lib/posts-api';
import markdownToHtml from '~/utils/markdownToHtml';

const metadata = {
  title: 'Warley Franco',
  description: 'Personal blog',
  link: 'https://warleyfranco.com'
}

const SITE_URL = 'https://warleyfranco.com'

const handler = nc();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const postItems = feed
      .map((post) => {
        const url = `${SITE_URL}/posts/${slugWithoutExtension(post.slug)}`;
        const content = markdownToHtml(post.content)

        return `<item>
          <title>${post.title}</title>
          <link>${url}</link>
          <guid>${url}</guid>
          <pubDate>${post.created}</pubDate>
          ${post.description && `<description>${post.description}</description>`}
          <content:encoded>${content}</content:encoded>
        </item>`;
      })
      .join('');

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
      <channel>
      <title>${metadata.title}</title>
      <description>${metadata.description}</description>
      <link>${metadata.link}</link>
      <lastBuildDate>${feed[0].created}</lastBuildDate>
      ${postItems}
      </channel>
      </rss>`;

    // set response content header to xml
    res.setHeader('Content-Type', 'text/xml');

    return res.status(200).send(sitemap);
  } catch (e: unknown) {
    if (!(e instanceof Error)) {
      throw e;
    }

    return res.status(500).json({ error: e.message || '' });
  }
});

export default handler;