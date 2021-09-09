<script context="module">
	export async function preload({ params }) {
	  try {
		const res = await this.fetch('api/archive/all');
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
  </script>
  
  <svelte:head>
	  <title>@isaacmorrier</title>
  </svelte:head>
  
  <!-- <div class="raw-data"><pre>{JSON.stringify(posts, null, 2)}</pre></div> -->
	{#each posts as post}

		<article class="post">
			<h1><a rel='prefetch' href='/{post.slug.current}'>{post.title}</a></h1>
			<div class="subtitle">
				<BlockContent blocks={post.subtitle} {serializers} />
			</div>
			
			<div class="content">
				<BlockContent blocks={post.body} {serializers} />
			</div>
		</article>

	{/each}