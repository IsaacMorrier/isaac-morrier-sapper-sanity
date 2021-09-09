import client from '../../../sanityClient'

export async function get (req, res) {
  try {
    // We have access to req.params.slug because the filename has [slug] in it.
    const { slug } = req.params;
    const filter = '*[_type == "post" && slug.current == $slug][0]';
    const projection = `{
      ...,
      body[]{
        ...,
        children[]{
          ...,
          _type == 'authorReference' => {
            _type,
            author->{name}
          }
        },
        _type == 'mainImage' => {
          asset->
        },
        _type == 'galleryGrid' => {
          gallery->{
            imagesGallery[]{
              ...,
              asset->
            }
          }
        },
        markDefs[]{
          ...,
          _type == 'internalLink' => {
            ...,
            'slug': @.reference->slug
          }
        }
      }
    }`;

    const query = filter + projection;
    const post = await client.fetch(query, { slug })
    res.end(JSON.stringify({ post }));
  } catch (err) {
    res.writeHead(500, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify({
      message: err.message
    }));  
  }
};