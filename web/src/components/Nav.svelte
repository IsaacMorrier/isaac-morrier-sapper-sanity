<script>
	export let segment;
</script>

<style lang="scss">
	@import "../style/theme.scss";

	header {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		width: 100%;
		z-index: 1000;

		background-color: var(--background-color);
		transition: background-color 0.25s ease-out;
		border-bottom: 1px solid var(--hr-color);

		font-size: .875rem;
		@include wider-than(md) {
			font-size: 1rem;
		}
		@include wider-than(lg) {
			padding-top: .25rem;
			padding-bottom: .25rem;
		}
	}

	h1 {
		@include caption;
		color: var(--text);
		font-style: normal;
		font-weight: 500;
		font-size: inherit;
		line-height: 1rem;
		letter-spacing: 0;

		margin: 0;
		float: left;

		a {
			@include caption;
			text-decoration: none;
			font-weight: 500;

			display: inline-block;
			padding: 1.25rem .5rem .75rem;

			&:hover {
				color: var(--text-color-hover);
			}
		}
	}

	nav {
		@include runway;

		ul {
			font-size: inherit;
			font-weight: 500;
			line-height: 1rem;

			text-align: right;
			margin: 0;
			padding: 0;

			li {
				line-height: 1rem;
				list-style-type: none;

				display: inline-block;
				padding: 0;

				a {
					@include caption;
					font-weight: 500;
					text-decoration: none;

					display: inline-block;
					padding: 1.25rem .5rem .75rem;
					
					&:hover {
						text-decoration: none;
						color: var(--text-color-hover);
						&::before,
						&::after {
							text-decoration: none;
							color: var(--text-color-hover);
						}
					}
					&.is-active {
						padding-right: .25rem; // Corrects for increase in width due to ::after
						&::after {
							content: '';
							width: .25rem;
							height: .25rem;
							border-radius: 10px;
							background-color: var(--text-color-hover);
							display: inline-block;
							position: relative;
							left: -50%;
							top: 10px;
						}
					}
				}
			}
		}
	}
</style>

<header>
	<nav>
		<div id="nav">
			<h1><a href='https://isaacmorrier.com'>{segment ? '❮' : ""} Isaac Morrier</a></h1>
			<ul>
				<li><a class='{segment === "info" ? "is-active" : ""}' href='info'>Info</a></li>
				<li><a href='https://instagram.com/isaacmorrier' target="_blank">Instagram</a></li>
				<li><a href='https://www.linkedin.com/in/isaacmorrier/' target="_blank">LinkedIn</a></li>
				<!-- <li><a rel=prefetch class='{segment === "archive" ? "is-active" : ""}' href='archive'>archive</a></li> -->
			</ul>
		</div>
	</nav>
</header>