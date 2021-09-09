<svelte:head>
<title>Page Not Found</title>
<style lang="scss">
	@import './style/theme.scss';
	:root {
		--background-color: #{ get-color(navy)};
		--text-color: #{ get-color(blue)};
		--text-color-hover: #{ mix(get-color(blue), get-color(navy), 80%)};
		--text-color-lighter: #{ get-color(blue)};
		--text-color-lightest: #{ get-color(blue)};
		--hr-color:  #{$transparent-gray};
		--accent-color: #{ get-color(blue)};
		--accent-color-hover: #{ mix(get-color(blue), get-color(navy), 80%)};
		--secondary-color: #{ get-color(blue)};
		--secondary-color-hover: #{ mix(get-color(blue), get-color(navy), 80%)};
		--tertiary-color: #{ get-color(blue)};
		--tertiary-color-hover: #{ mix(get-color(blue), get-color(navy), 80%)};
		--quaternary-color: #{ get-color(blue)};
		--quaternary-color-hover: #{ mix(get-color(blue), get-color(navy), 80%)};
		--quinary-color: #{ get-color(blue)};
		--quinary-color-hover: #{ mix(get-color(blue), get-color(navy), 80%)};
	}
</style>
</svelte:head>

<article>
	<h1>Whoops</h1>

	<div class="page-content">

		<p class="lede">It looks like the page you’re looking for isn’t here.</p>
		
		<p><a href="https://isaacmorrier.com">Return Home</a>&nbsp;&nbsp;&nbsp;<a href="mailto:isaac@isaacmorrier.com">Email Isaac</a></p>
		
	</div>
</article>