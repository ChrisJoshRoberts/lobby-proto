<script>
	import { gameName, isModalOpen, gameTile, gameVersion } from '$lib/stores';
	let isSelectionConfirmed = $state(false);
	function closeModal() {
		$isModalOpen = false;
	}

	function confirmSelection() {
		isSelectionConfirmed = true;
	}
</script>

<div class="background">
	<div class="modal">
		{#if isSelectionConfirmed}
			<img src="assets/Tick.png" alt="Tick" class="tick-icon" />
			<h1 class="success">Success!</h1>
			<h2>Thank you for your participation!</h2>
		{:else}
		<div class="game-tile-container">
			<img src={$gameTile} alt="game tile" class="game-tile" />
			<img src={$gameTile} alt="game tile" class="game-tile blur" />
		</div>
			<h1>You have selected</h1>
			<h2><span>{$gameName}</span></h2>
			<!-- <p class="byline">{$gameVersion}</p> -->
			<p class="byline">Are you happy with your selection?</p>
			<div class="btn-container">
				<button onclick={closeModal}>Cancel</button>
				<button onclick={confirmSelection} class="primary-btn">Confirm</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.game-tile-container {
		position: relative;
		width: 150px;
		height: 150px;
		margin-bottom: 16px;
		display: flex;
		justify-content: center;

	}
		.game-tile {
		position: absolute;
		z-index: 1;
		width: 100%;
		height: 100%;
		margin-bottom: 16px;
		border-radius: 8px;
		/* box-shadow: 0px 0px 20px #5BE94C80; */
	}
	.blur {
		position: absolute;
		top: 10px;
		z-index: 0;
		filter: blur(6px);
	}
  .success {
    font-size: 44px;
  }
	.btn-container {
		display: flex;
	}
	.byline {
		color: #ffffff5e;
		font-weight: 300;
		font-size: 16px;
		margin-bottom: 16px;
	}
	h1 {
		font-size: 34px;
		font-weight: 700;
		margin: 0;
		line-height: 1.1;
		text-align: center;
	}
	span {
		color: #5ee74e;
		font-weight: 700;
		font-size: 24px;
	}

	.tick-icon {
		width: 180px;
		height: 180px;
		margin-bottom: 16px;
		border-radius: 8px;
	}
	.background {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		background-color: #12151d56;
		backdrop-filter: blur(5px);
	}
	.modal {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 16px;
		box-shadow:
			rgba(68, 105, 137, 0.48) 6px 2px 16px 0px,
			rgba(67, 116, 161, 0.8) -6px -2px 16px 0px;
		width: 30%;
		height: 50%;
		background-color: #222531;
	}
	h2 {
		color: white;
		text-align: center;
		font-weight: 300;
	}
	.primary-btn {
		background-color: var(--color-sky-500);
		color: white;
		border: none;
		font-weight: 700;
	}

	button {
		position: relative;

		margin: 8px;
		width: 150px;
		padding: 8px 16px;
		background-color: #3f4665;
		color: white;
		border-radius: 8px;
		cursor: pointer;
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: #7c7f8fb7;
		}
	}
	@media (max-width: 1400px) {
		.modal {
			width: 50%;
		}
		button {
			top: 24px;
		}
	}
	@media (max-width: 660px) {
		.modal {
			width: 80%;
			height: 60%;
		}
		button {
			width: 100%;
			margin: 4px 0;
		}
		.btn-container {
			position: relative;
			width: 80%;
			margin: 0;
			padding: 0;
			flex-direction: column;
		}
		h1 {
			font-size: 32px;
		}
		.game-tile {
			width: 100%;
			height: 100%;
		}
	}
	@media (min-width: 1800px) {
		button {
			top: 52px;
		}
	}
</style> 
