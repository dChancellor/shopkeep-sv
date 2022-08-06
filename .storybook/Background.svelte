<script lang="ts">
	export let mode: 'dark' | 'light' = 'dark';
</script>

<div class={`${mode}`}>
	<slot />
</div>

<style>
	div {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	/* TODO - change these colors to actual background colors */
	.dark {
		background-color: darkslategrey;
	}
	.light {
		background-color: antiquewhite;
	}
</style>
