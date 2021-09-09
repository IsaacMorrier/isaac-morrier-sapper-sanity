// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
// https://github.com/movingbrands/svelte-portable-text
import BlockContent from '@movingbrands/svelte-portable-text';
// https://www.npmjs.com/package/@sanity/image-url
import Image from './Image.svelte';
import GalleryGrid from './GalleryGrid.svelte';
import Code from './Code.svelte';
import Author from './Author.svelte';
import Link from './Link.svelte';
import InternalLink from './InternalLink.svelte';

import urlFor from '../sanityImageUrlBuilder';

export default {
  marks: {
    link: ({ children, mark }) => ({
      component: Link,
      childNodes: children,
      props: mark,
    }),
    internalLink: ({ children, mark }) => ({
      component: InternalLink,
      childNodes: children,
      props: mark,
    }),
  },
  types: {
    mainImage: ({ node, children }) => ({
      component: Image,
      childNodes: children,
      props: {
        node: node
      },
    }),
    // galleryImage: ({ node, children }) => ({
    //   component: Image,
    //   childNodes: children,
    //   props: {
    //     url: urlFor(node)
    //       .width(800)
    //       .auto('format')
    //       .url(),
    //     alt: node.alt,
    //   },
    // }),
    galleryGrid: ({ children, node: { gallery } }) => ({
      component: GalleryGrid,
      childNodes: children,
      props: {
        gallery,
      },
    }),
    code: ({ node: { code, language } }) => ({
      component: Code,
      childNodes: [],
      props: {
        code,
        language,
      },
    }),
    authorReference: ({ children, node: { author } }) => ({
      component: Author,
      childNodes: children,
      props: {
        author,
      },
    }),
  },
};
