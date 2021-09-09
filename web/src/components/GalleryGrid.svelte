<script>
  export let gallery;

  let images = gallery.imagesGallery;

</script>

<style lang="scss">
  @import "../style/theme.scss";

  .gallery-grid {
    display: flex;
    flex-wrap: wrap;

    .gallery-grid-box {

      width: 33%;
      max-width: 16rem;
      height: auto;

      padding: 1rem;

      img {
        height: auto;
        width: auto;
        max-height: 100%;
        max-width: 100%;
        margin: 0 auto;
      }
    }
    @include wider-than(md){
      .gallery-grid-box {
        width: 25%;
      }
    }
  }
</style>

<div class="gallery-grid">
  {#each images as image}
  <div class="gallery-grid-box" bind:clientWidth={image.w} style="height: {image.w}px">
    <img src={image.src} alt={image.alt} />
  </div>
  {/each}
</div>
