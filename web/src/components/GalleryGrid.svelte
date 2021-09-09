<script>
  // import Image from "./Image.svelte";
  export let gallery;

  let images = gallery.imagesGallery;

</script>

<style lang="scss">
  @import "../style/theme.scss";

  .gallery-grid {
    display: flex;
    flex-wrap: wrap;

    .gallery-grid-box {
      display: flex;
      justify-content: center;

      width: 33%;
      max-width: 16rem;
      height: auto;

      padding: 1rem;

    }
    @include wider-than(md){
      .gallery-grid-box {
        width: 25%;
      }
    }
  }
  .thumbnail {
    height: 100%;
    width: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

<div class="gallery-grid">
  {#each images as image}
  <div class="gallery-grid-box" bind:clientWidth={image.w} style="height: {image.w}px;">
    <div class="thumbnail" style="background-image:url({image.asset.url + '?w=360'})"></div>
  </div>
  {/each}
</div>
