<script>
	import Banner from '$lib/components/Banner.svelte';
	import GamesGrid from '$lib/components/GamesGrid.svelte';
	import LeftSidebar from '$lib/components/LeftSidebar.svelte';
	import RecentBanner from '$lib/components/RecentBanner.svelte';
	import RightSidebar from '$lib/components/RightSidebar.svelte';
	import TopBar from '$lib/components/topBar.svelte';
	import { ChevronRight, ChevronLeft } from 'lucide-svelte';
</script>

<div>
	<TopBar />
	<div class="main-container">
		<LeftSidebar />
		<div class="center-content">
			<Banner />
			<RecentBanner />
			<div class="games-section">
				<div class="title-container">
					<h4>Original Games</h4>
					<div class="navigation-chev">
						<div class="chev">
							<ChevronLeft />
						</div>
						<div class="chev">
							<ChevronRight />
						</div>
					</div>
				</div>
        <GamesGrid />
			</div>
		</div>
		<RightSidebar />
	</div>
</div>

<style>
	.chev {
    padding: 8px;
    border-radius: 8px;
    background-color: #1c1f2a;
	}
	.navigation-chev {
		display: flex;
		gap: 8px;
		align-items: center;
	}
	.main-container {
		position: fixed;
		display: flex;
		justify-content: space-between;
		width: 100%;
		background-color: #12151d;
		height: 100dvh;
	}
	.center-content {
		background-color: #12151d;
		padding: 16px;
		overflow-y: auto;
		color: white;
		position: relative;
		top: 78px;
		width: calc(100% - 300px - 280px);
		margin-left: 16px;
		margin-top: 16px;
    margin-bottom: 44px;
	}
	.games-section {
		margin-top: 16px;
	}
	h4 {
		font-size: 20px;
	}
	.title-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}
</style>
