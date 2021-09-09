<script context="module">
	export async function preload({ params }) {
	  try {
		const res = await this.fetch('api/archive/postlist');
		const { posts } = await res.json()
		return { posts };
	  } catch (err) {
		this.error(500, err);
	  }
	};
</script>  
  
<script>
	export let posts;
	let filter;
	
	posts = posts.filter(post => !post.categories.includes('Archive'));
	import CategoriesList from "../components/CategoriesList.svelte";

	// let categories = posts.map(p => p.categories); // create array of categories from posts
	// categories = [...new Set([].concat.apply([], categories))]; // create set from flattened categories array

</script>

<style lang="scss">
	@import "../style/theme.scss";
	ul {
		@include runway;
		list-style: none;
		padding: 0;
	}
	li {
		@include display;
		font-style: italic;
		font-size: 3.5rem;

		line-height: .95;
		margin-top: 0;
		margin-bottom: .75rem;

		a {
			text-decoration: none;
			color: inherit;

			&:hover {
				color: var(--text-color-hover);
			}
		}

		@include wider-than(sm) {
			font-size: 4.5rem;
			letter-spacing: -.5px;
		}
		@include wider-than(md) {
			font-size: 6rem;
			letter-spacing: -1px;
		}
		@include wider-than(lg) {
			font-size: 8.625rem;
		}
	}

</style>
  
<svelte:head>
	<title>@isaacmorrier</title>
</svelte:head>

<CategoriesList {posts} bind:active={filter}/>

<!-- <div class="raw-data"><pre>{JSON.stringify(posts, null, 2)}</pre></div> -->
<ul class="post-list">
	{#if filter}
		{#each posts.filter(post => post.categories.includes(filter)) as post}
			<li><a rel='prefetch' href='/{post.slug.current}'>{post.title}</a></li>
		{/each}
	{:else}
		{#each posts as post}
			<li><a rel='prefetch' href='/{post.slug.current}'>{post.title}</a></li>
		{/each}
	{/if}
</ul>