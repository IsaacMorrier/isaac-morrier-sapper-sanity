import client from '../../../sanityClient'

/**
 * This route is called 'all' instead of index to prevent route conflicts.
 * @see https://sapper.svelte.dev/docs#Route_conflicts
 */
export async function get (req, res) {
  try {
    const filter = '*[_type == "post" && defined(slug.current) && publishedAt < now()]|order(publishedAt desc)';
    const projection = `
      []{
        ...,
        body[]{
          ...,
          markDefs[]{
            ...,
            _type == "internalLink" => {
              ...,
              "slug": @.reference->slug
            }
          }
        }
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