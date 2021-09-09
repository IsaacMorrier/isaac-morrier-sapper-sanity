<script>

import SanityClientConstructor from "@sanity/client";

</script>
  <svelte:head>
	<title>About Isaac</title>
	<style lang="scss">
		@import './style/theme.scss';
		:root {
			--background-color: #{ get-color(red)};
			--text-color: #{ get-color(egg)};
			--text-color-hover: #{ mix(get-color(egg), get-color(red), 80%)};
			--text-color-lighter: #{ get-color(egg)};
			--text-color-lightest: #{ get-color(egg)};
			--hr-color:  #{$transparent-gray};
			--accent-color: #{ get-color(egg)};
			--accent-color-hover: #{ mix(get-color(egg), get-color(red), 80%)};
			--secondary-color: #{ get-color(egg)};
			--secondary-color-hover: #{ mix(get-color(egg), get-color(red), 80%)};
			--tertiary-color: #{ get-color(egg)};
			--tertiary-color-hover: #{ mix(get-color(egg), get-color(red), 80%)};
			--quaternary-color: #{ get-color(egg)};
			--quaternary-color-hover: #{ mix(get-color(egg), get-color(red), 80%)};
			--quinary-color: #{ get-color(egg)};
			--quinary-color-hover: #{ mix(get-color(egg), get-color(red), 80%)};
		}
		footer div {
			opacity: 0.3;
		}
	</style>
  </svelte:head>

<article>
	<h1>Hi,<br> I’m Isaac Morrier</h1>

	<div class="page-content">

		<p class="lede">I study branding, products, people, material culture, and the effects technology has on all of these things and help companies create competitive advantage with that insight.</p>
		
		<p>Lately I wrote the strategy for an international soda redesign, launched an energy bar you could order via text message, tweeted llama gifs for a $2 trillion bank, found a new identity for America’s oldest performance running shoe brand, positioned zero-amenity micro-apartments, found a universal language for recycling, growth-hacked coffee, and helped launch the unofficial memecoin of Hustle Twitter.</p>
		
		<p>These are some of the things I care about:</p>
		<ul>
			<li>people</li>
			<li>the future</li>
			<li>typography</li>
		</ul>
		
		<p>These are some of the things I don’t care about:</p>
		
		<ul><li>Any World Series outcome after 2004</li></ul>
		
		<p>I currently work as a strategist at Design Army in Washington, DC and previously at Verb Energy, DigitasLBi, Trinity Mobile Networks, SapientNitro, and the Behavioral Research Lab at the Yale School of Management. I graduated from Yale University with my B.A. in Sociology in 2017.</p>

		<p>I built this website with Sapper, Sanity, and Netlify.</p>
		
		<p>Humans who want to work with me can contact me at isaac@isaacmorrier.com.</p>
		
		<p>Cheers,</p>
		
		<p>Isaac</p>
	</div>
</article>