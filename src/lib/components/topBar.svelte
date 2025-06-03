<script>
  import {  AlignLeft, Club, Trophy, Coins, WalletMinimal, Bell, MessageCircleMore } from 'lucide-svelte';

</script>

<div class="top-bar">
  <div class='left'>
    <div class="top-bar-item">
      <div class="menu">
        <AlignLeft />
      </div>
      <div class="logo">
        CR<span>BET</span>
      </div>
    </div>
    <div class="top-bar-item hidden">
      <div class="toggle-container">
        <div class="toggle-button selected">
          <div class="icon">
            <Club />
          </div>
          <p>Casino</p>
        </div>
        <div class="toggle-button">
          <div class="icon deselected">
            <Trophy fill=#B4DEFF/>
          </div>
          <p>Sports</p>
        </div>
          <div class="toggle-button">
          <div class="icon deselected">
            <Coins fill=#B4DEFF/>
          </div>
          <p>Live Casino</p>
        </div>
      </div>
  
    </div>
  </div>
  <div class="right">
    <div class="top-bar-item hidden">
      <div class="deposit-container">
        <div class="current-balance-wrapper">
          <div class='flex gap-2'>
            <img src='assets/coin.png' alt="coin" class="coin"/>
            <p class="current-balance">$ 8849.00</p>
          </div>
          <div class="toggle-button selected">
            <p>Deposit</p>
          </div>

        </div>
      </div>
    </div>
    <div class="top-bar-item">
      <div class="secondary-button">
        <WalletMinimal strokeWidth={0.8} fill='#FFFFFF66'/>
        <p>Wallet</p>
      </div>
      <div class="primary-icon-btn">
        <MessageCircleMore fill='#fff'/>
      </div>
      <div class="secondary-button icon-btn">
        <Bell strokeWidth={0.8} fill='#FFFFFF66'/>
      </div>
    </div>
  </div>
</div>

<style>
  .secondary-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background-color:#272639;
    border-radius: 8px;

    p {
      color: #ffffff66;
    }
  }
  .icon-btn {
    padding: 8px;
  }
  .primary-icon-btn {
    background: linear-gradient(0deg, #2487cd 0%, #93cdfa 100%);
    padding: 8px;
    border-radius: 8px;
  }
  .current-balance-wrapper {
    display: flex;
    align-items: center;
    gap: 16px;
    border: 1px solid #59acec47;
    border-radius: 8px;
    padding: 2px;
    padding-left: 16px;
  }
  .current-balance {
    font-weight: 300;
    color: #ffe46e;
  }
  .coin {
    width: 24px;
    height: 24px;
  }
  .left, .right {
    display: flex;
    align-items: center;
  }
  .deselected {
    color: var(--color-sky-500)
  }
  .selected {
    color: white;
    border-radius: 8px;
    background: linear-gradient(0deg, #2487cd 0%, #93cdfa 100%);
  }
  .toggle-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-weight: 300;
  }
  .toggle-container {
    display: flex;
    border: 1px solid #59acec47;
    border-radius: 8px;
  }
  .top-bar-item {
    display: flex;
    align-items: center;
    gap: 16px;
    margin: 0 16px;
  }
  .top-bar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--medium-background-color);
    padding: 16px;
  }
  .menu {
    background-color: #242837;
    padding: 8px;
    border-radius: 8px;
  }

  .logo {
    font-size: 24px;
    font-weight: 800;

    span {
      color: var(--color-sky-500)
    }
  }

  @media (max-width: 1110px) {
    .top-bar-item.hidden {
      display: none;
    }
  }
</style>