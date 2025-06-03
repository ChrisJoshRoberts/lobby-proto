<script lang="ts">
	import { onMount } from 'svelte';
	import { isModalOpen, gameName } from '$lib/stores';
	import CustomModal from './CustomModal.svelte';

	const gamesArray = [
		{
			image: 'assets/lobby-icons/just-logo/1_Bells-and-Holly-Logo-only.png',
			name: 'Bells and Holly',
			version: 'Logo Only'
		},
		{
			image: 'assets/lobby-icons/just-logo/1_BullsVsBears_Logo only.png',
			name: 'Bulls vs Bears',
			version: 'Logo Only'
		},
		{
			image: 'assets/lobby-icons/just-logo/1_CarnavalLink&Win_logo only.png',
			name: 'Carnival Link & Win',
			version: 'Logo Only'
		},
		{
			image: 'assets/lobby-icons/just-logo/1_Clover-Rollover-Logo only.png',
			name: 'Clover Rollover',
			version: 'Logo Only'
		},
		{
			image: 'assets/lobby-icons/just-logo/1_FlanagansRiches_Logo only.png',
			name: "Flanagan's Riches",
			version: 'Logo Only'
		},
		{
			image: 'assets/lobby-icons/just-logo/1_FruitSalad_logo only.png',
			name: 'Fruit Salad',
			version: 'Logo Only'
		},
		{
			image: 'assets/lobby-icons/just-logo/1_SuperShowballMystery - Logo only.png',
			name: 'Super Showball Mystery',
			version: 'Logo Only'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_3LuckyGators_Logo,char and feature.png',
			name: '3 Lucky Gators',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_9PotsofGold_logo,char and feature.png',
			name: '9 Pots of Gold',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_Amazon-LostGold_logo,char and feature.png',
			name: 'Amazon Lost Gold',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_CrazyMonkey.png',
			name: 'Crazy Monkey',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_DarkWaters - Logo,char and feature.png',
			name: 'Dark Waters',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_MonkeyBonanza_logo,char and feature.png',
			name: 'Money Bonanza',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_Piggy Bonanza - logo, char and feature.png',
			name: 'Piggy Bonanza',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_T-Rex Rocks - logo,char and feature.png',
			name: 'T-Rex Rocks',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/logo-char-feat/3_WonderWoods - logo,char and feature.png',
			name: 'Wonder Woods',
			version: 'Logo, character & feature'
		},
		{
			image: 'assets/lobby-icons/with-char/2_AlaskanFishing_Logo and char.png',
			name: 'Alaskan Fishing',
			version: 'With character'
		},
		{
			image: 'assets/lobby-icons/with-char/2_Goldwyns Fairies logo and char.png',
			name: 'Goldwyns Fairies',
			version: 'With character'
		},
		{
			image: 'assets/lobby-icons/with-char/2_JadeShuriken Logo and char.png',
			name: 'Jade Shuriken',
			version: 'With character'
		},
		{
			image: 'assets/lobby-icons/with-char/2_LuckyBonanza_logo and char.png',
			name: 'Lucky Bonanza',
			version: 'With character'
		},
		{
			image: 'assets/lobby-icons/with-char/2_LuckyLeprechaun logo and char.png',
			name: 'Lucky Leprechaun',
			version: 'With character'
		},
		{
			image: 'assets/lobby-icons/with-char/2_LuckyShot_logo and char.png',
			name: 'Lucky Shot',
			version: 'With character'
		},
		{
			image: 'assets/lobby-icons/with-char/2_SoccerStriker_logo and char.png',
			name: 'Soccer Striker',
			version: 'With character'
		},
		{
			image: 'assets/lobby-icons/with-char/2_Splash of Gold_Leprechaun_logo and char.png',
			name: 'Splash of Gold Leprechaun',
			version: 'With character'
		}
	];

	let games: Array<{ image: string; name: string; version: string }> = [];

	function shuffleGames(array: Array<{ image: string; name: string; version: string }>) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	onMount(() => {
		// Shuffle games on component mount
		games = shuffleGames(gamesArray);
	});

	function handleIconClick(game: { image: string; name: string; version: string }) {
		// Handle the click event for the game icons
    $gameName = game.name;
		$isModalOpen = true;
		console.log('Game icon clicked', $gameName);

	}
</script>

<div class="games-grid">
	{#each games as game, index}
		<button onclick={() => handleIconClick(game)}>
			<img src={game.image} alt="Game Icon" class="game-icon" />
		</button>
	{/each}
</div>

<style>
	.games-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
		gap: 16px;
		padding: 16px;
		background-color: #222531;
		border-radius: 8px;
		margin-bottom: 44px;
	}

	.game-icon {
		width: 100%;
		height: auto;
		border-radius: 8px;
		object-fit: cover;
		transition: all 0.3s ease-in-out;

		&:hover {
			opacity: 0.6;
			box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
		}
	}

	@media (max-width: 462px) {
		.games-grid {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
			gap: 8px;
		}

		.game-icon {
			border-radius: 4px;
		}
	}
</style>
