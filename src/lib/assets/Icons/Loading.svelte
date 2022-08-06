<script lang="ts">
	export let color = 'white';
	export let ariaHidden = false;

	$: arcColor = `--arcColor: ${color}`;
</script>

<div
	data-icon="loading"
	data-testid={`icon-loading-${color}`}
	aria-hidden={ariaHidden}
	role="img"
	aria-label="loading"
	class="loading-icon-container"
	style={`${arcColor}`}
>
	<div class="arc outside" />
	<div class="arc inside" />
</div>

<style>
	.loading-icon-container {
		position: relative;
		display: flex;
		flex-flow: column;
		width: 1rem;
		height: 1rem;
		gap: 5px;
		align-items: center;
		padding: 0.2rem;
		justify-content: center;
	}
	.arc {
		position: absolute;
		border-radius: 50%;
		background-color: transparent;
		animation-duration: 1.3s;
		animation-name: circle;
		animation-iteration-count: infinite;
		animation-timing-function: ease-in-out;
	}
	.outside {
		border: 4px solid var(--arcColor);
		width: 140%;
		height: 140%;
		border-top-color: transparent;
		border-bottom-color: transparent;
	}
	.inside {
		border: 4px solid var(--arcColor);
		width: 60%;
		height: 60%;
		border-top-color: transparent;
		border-bottom-color: transparent;
		animation-delay: 0.3s;
		filter: brightness(200%);
	}
	@keyframes circle {
		from {
			rotate: 0turn;
		}
		to {
			rotate: 1turn;
		}
	}
</style>
