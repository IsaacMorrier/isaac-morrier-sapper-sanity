import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    const filter = '*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)';
    const projection = `
      []{
        ...,
        "categories": categories[]->title
      }`;
    const query = filter + projection;
    const posts = await client.fetch(query);
    res.end(JSON.stringify({ posts }));
  } catch (err) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: err.message
    }));  
  }
};