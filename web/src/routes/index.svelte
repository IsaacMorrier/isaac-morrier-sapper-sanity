<script context="module">
	export async function preload({ params }) {
	  try {
		const res = await this.fetch('api/blog/all');
		const { posts } = await res.json()
		return { posts };
	  } catch (err) {
		this.error(500, err);
	  }
	};
  </script>  
  
  <script>
	import BlockContent from "@movingbrands/svelte-portable-text";
	import serializers from "../components/serializers";

	export let posts;
  
	function formatDate(date) {
	  return new Date(date).toLocaleDateString()
	}
  </script>
  
  <svelte:head>
	  <title>@isaacmorrier</title>
  </svelte:head>
  
	{#each posts as post}
		<h2><a rel='prefetch' href='blog/{post.slug.current}'>{post.title}</a> ({formatDate(post.publishedAt)})</h2>

	<h1>{post.title}</h1>

	<div class="content">
	<BlockContent blocks={post.body} {serializers} />
	</div>

	{/each}