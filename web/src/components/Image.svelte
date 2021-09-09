<script>
  import urlFor from '../sanityImageUrlBuilder';

  export let node;

  let fileName = node.asset.originalFilename;
  let alt = node.alt;
  let src = urlFor(node).url() + "/" + fileName;
  // let lqip = node.asset.metadata.lqip; // if we want to add lazy loading a la https://www.apostrof.co/blog/svelte-sanity-responsive-lazy-loaded-jank-free-images/

  const widthsPreset = [640, 768, 1024, 1366, 1600];

  let srcset = widthsPreset
    .map((w) => urlFor(node).url() + "/" + fileName + '?w=' + w + ' ' + w + 'w')
		.join(',')

</script>

<style>
  img {
    height: auto;
    width: auto;
    max-height: 100%;
    max-width: 100%;
  }
</style>

<img {src} {srcset} {alt} />
