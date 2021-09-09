<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have access to params.slug here
      const res = await this.fetch(`api/archive/${params.slug}`);
      const { post } = await res.json();
      return { post };
    } catch (err) {
      this.error(500, err);
    }
  };
</script>

<script>
  import BlockContent from "@movingbrands/svelte-portable-text";
  import serializers from "../components/serializers";

  export let post;
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<article class="{post.layout ? post.layout : 'post'}">

  <div class="front-matter">
    <h1>{post.title}</h1>
    {#if post.subtitle}
    <div class="subtitle">
      <BlockContent blocks={post.subtitle} {serializers} />
    </div>
    {/if}
    {#if post.description}
    <div class="description">
      <BlockContent blocks={post.description} {serializers} />
    </div>
    {/if}
  </div>
  
  <div class="content">
    <!-- <div class="raw-data"><pre>{JSON.stringify(post, null, 2)}</pre></div> -->
    <BlockContent blocks={post.body} {serializers} />
  </div>

</article>