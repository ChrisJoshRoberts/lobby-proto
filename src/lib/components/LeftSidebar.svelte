<script>
  import { Search, 
    House, 
    Layers2,
    Heart, 
    RefreshCcwDot,
    WalletCards, 
    Star,
    BadgeCheck,
    Crown,
    Gift,
    Award,
    Fan
  } from 'lucide-svelte';

  const menuItems = [
    { name: 'Lobby', icon: House },
    {name: 'Providers', icon: Layers2 },
    {name: 'Favorites', icon: Heart },
    {name: 'Recent', icon: RefreshCcwDot }
  ]
  const filterItems = [
    { name: 'All', icon: WalletCards },
    { name: 'Popular', icon: Star },
    { name: 'New Games', icon: Award },
    { name: 'VIP', icon: Crown },
    { name: 'Bonuses', icon: Gift },
    { name: 'High RTP', icon: Fan },
    { name: 'Jackpots', icon: BadgeCheck }
  ]

</script>

<div class="main">
  <div class="top-card-container">
    <div class="card-1">
      <img src="assets/treasure.png" alt="treasure chest" class="card-image">
      <p class="card-title">GIFT</p>
    </div>
    <div class="card-2">
      <img src="assets/large@2x.png" alt="Roullette wheel" class="card-image">
      <p class="card-title">WHEEL PLAY</p>
    </div>
  </div>
  <div class="search-bar">
    <div class="search-icon">
      <Search  />
    </div>
    <p class="search-placeholder">Search for game</p>
  </div>
  <div class="menu-wrapper">
    {#each menuItems as item, index}
      <div class={`menu-item ${index === 0 ? 'test': ''}`} data-index={index}>
        <item.icon />
        <p>{item.name}</p>
      </div>
    {/each}
  </div>
  <div class="menu-wrapper">
    {#each filterItems as item, index}
      <div class="menu-item" data-index={index}>
        <item.icon />
        <p>{item.name}</p>
      </div>
    {/each}
  </div>
</div>  

<style>

  .menu-wrapper {
    margin: 16px 0;
    background-color: #222531;
    border-radius: 8px;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    padding: 16px;
    color: #ffffffa7;
    cursor: pointer;
    gap: 8px;
  }
  .test {
    color: #2487cd;
    background-color: #040d1d;
    border-radius: 8px;
  }
  .search-bar {
    display: flex;
    background-color: #122a53;
    padding: 8px 16px;
    border-radius: 8px;
    gap: 8px;
    align-items: center;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.157);
  }
  .search-placeholder { 
    line-height: 0;
    opacity: 0.3;
    font-weight: 300;
  }
  .search-icon {
    opacity: 0.3;
  }
  .main {
    position: relative;
    top: 78px;
    left: 0px;
    border-top: 1px solid #ffffff24;
    background-color: #1D202D;
    width: 300px;
    padding: 16px;
    overflow-y: scroll;

  }
  .top-card-container {
      display: flex;
      margin: 16px 0px;
      gap: 16px;
    }
  .card-1, .card-2 {
    position: relative;
    width: 100%;
    border-radius: 8px;
    height: 160px;
    overflow: hidden;
  }
  .card-1 {
    background: linear-gradient(-30deg, #C55B0F 0%, #c55b0f00 70%);
  }
  .card-2 {
    background: linear-gradient(-30deg, #2487CD 0%, #2487cd00 70%);
  }
  .card-image {
    position: absolute;
    bottom: -30px;
    right: -20px;
  }
  .card-title {
    padding: 8px;
    color: #ffffffa7;
  }

  @media (max-width: 1110px) {
    .main {
      display: none;
    }
  }
</style>