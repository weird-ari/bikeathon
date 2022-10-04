<script>
	import Router, { location, link } from "svelte-spa-router";
	import Settings from "./Settings.svelte";
	import Timer from "./Timer.svelte";
</script>

<main>
	<Router
		routes={{
			"/settings": Settings,
			"/timer": Timer,
		}}
	/>
</main>

<style>
	main {
		text-align: center;
		margin: 0;
		padding: 0;
		height: 100%;
	}
</style>
