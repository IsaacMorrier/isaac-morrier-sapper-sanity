<script context="module">
  export async function preload({ params }) {
    try {
      // As with the server route, we have acces to params.slug here
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

<article>
  <h1><a rel='prefetch' href='/{post.slug.current}'>{post.title}</a></h1>
  
  <div class="content">
    <BlockContent blocks={post.body} {serializers} />
  </div>
</article>