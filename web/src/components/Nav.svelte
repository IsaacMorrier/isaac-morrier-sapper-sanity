<script>
	export let segment;
</script>

<style>

</style>

<header>
	<nav>
		<div id="nav">
			<h1><a class='{segment === undefined ? "is-active" : ""}' href='.'>Isaac Morrier</a></h1>
			<ul>
				<li><a class='{segment === "info" ? "is-active" : ""}' href='info'>Info</a></li>
				<!-- <li><a rel=prefetch class='{segment === "archive" ? "is-active" : ""}' href='archive'>archive</a></li> -->
			</ul>
		</div>
	</nav>
</header>