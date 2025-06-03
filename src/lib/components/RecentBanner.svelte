<script>
  import { Medal, BadgeDollarSign } from 'lucide-svelte';

  const recentWins = [
    {gameIcon: 'assets/recentIcons/21cash.png', gameName: '21 Cash', winAmount: '$1,485.00', colorOne: '#1B9CFF', colorTwo: '#1B9CFF00'},
    {gameIcon: 'assets/recentIcons/mega-slots.png', gameName: 'Mega Slots', winAmount: '$1,385.06', colorOne: '#FEEA5C', colorTwo: '#FEEA5C00'},
    {gameIcon: 'assets/recentIcons/pokers-stars.png', gameName: 'Poker Starts', winAmount: '$2,483.87', colorOne: '#2D2FC9', colorTwo: '#2D2FC900'},
    {gameIcon: 'assets/recentIcons/wild-jackpot.png', gameName: 'Wild Jackpot', winAmount: '$3,748.64', colorOne: '#FFB1FF', colorTwo: '#FFB1FF00'},
  ]

</script>
<div class="recent-banner">
  <div class='info-wrapper'>
    <div class='info'>
      <Medal color="#1B9CFF" />
      <p>Recent Big Wins</p>
    </div>
    <div class='info'>
      <BadgeDollarSign color='#1B9CFF' />
      <p>37,131</p>
    </div>
  </div>
  <div class="recent-wins">
    {#each recentWins as win}
      <div class="recent-win" style="background: radial-gradient(circle at 50% 160%, {win.colorOne} 0%, {win.colorTwo} 100%);">
        <div class="game-icon">
          <img src={win.gameIcon} alt={win.gameName} />
        </div>
        <div class="game-details">
          <p class="game-name">{win.gameName}</p>
          <p class="win-amount">{win.winAmount}</p>
        </div>
        <div class="line"></div>
      </div>
    {/each}
  </div>
</div>

<style>
  .recent-wins {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-left: 16px;
    gap: 8px;
    flex-wrap: wrap;

  }
  .recent-win {
    display: flex;
    position: relative;
    padding: 8px 16px;
    align-items: center;
    backdrop-filter: blur(20px);
    border-radius: 8px;
    border: 0.5px solid #a5d8ff40;
    flex: 1;
  }
  .line {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: radial-gradient(50% 50% at 50% 50%, #76c4ff 0%, rgba(27, 156, 255, 0.00) 100%);
    height: 1px;
  }
  .game-icon {
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin-right: 8px;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-right: 1px solid #5b5b5b;
    width: 200px;
    flex-shrink: 0;
  }
  .info {
    display: flex;
    align-items: center;
    gap: 8px;

  }
  .recent-banner {
    display: flex;
    align-items: center;
    background-color: #1C1F2A;
    padding: 16px;
    border-radius: 8px;
    margin-top: 16px;
  }

  @media (max-width: 1110px) {
    .recent-banner {
      flex-direction: column;
    }
    .info-wrapper {
      flex-direction: row;
      width: 100%;
      border: none;
      margin-bottom: 16px;
    }
  }
</style>