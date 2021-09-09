<script>
	export let segment;
</script>

<style>

</style>

<header>
	<nav>
		<div id="nav">
			<h1><a href='.'>{segment ? '❮' : ""} Isaac Morrier</a></h1>
			<ul>
				<li><a class='{segment === "info" ? "is-active" : ""}' href='info'>Info</a></li>
				<li><a href='https://instagram.com/isaacmorrier'>Instagram</a></li>
				<li><a href='https://www.linkedin.com/in/isaacmorrier/'>LinkedIn</a></li>
				<!-- <li><a rel=prefetch class='{segment === "archive" ? "is-active" : ""}' href='archive'>archive</a></li> -->
			</ul>
		</div>
	</nav>
</header>