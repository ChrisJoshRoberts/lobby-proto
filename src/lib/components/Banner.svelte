<div class="banner">
  <div class="gradient"></div>
  <div class="title-wrapper">
    <p class="upper-text">Claim your welcome offer today!</p>
    <h1 class="title">Welcome to CR<span>BET</span></h1>
    <p class="subtitle">Your ultimate gaming destination</p>
    <button>Sign Up Now</button>
  </div>
</div>

<style>
  span {
    color: var(--color-sky-500)
  }
  .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 6, 33, 0.7) 20%, rgba(0, 0, 0, 0.2) 100%);
    border-radius: 16px;
  }
  .banner {
    position: relative;
    width: 100%;
    padding: 16px;
    background-color: green;
    border-radius: 16px;
    height: 320px;
    background: url('assets/virtual-casino-experience-exploring-modern-technologies-sports-gambling-finances-with.jpg') ;
    background-position: center;
    background-repeat: no-repeat;
    background-position: 10% 20%;
    background-size: cover;
  }
  .title-wrapper {
    position: absolute;
    z-index: 300;
    bottom: 20%;
    left: 32px;
  }
  .title {
    font-size: 44px;
    font-weight: 700;
    color: white;
    margin: 8px 0;
  }
  .subtitle {
    font-size: 20px;
    color: white;
    margin-bottom: 24px;
  }
  button {
    padding: 12px 24px;
    background-color: var(--color-sky-500);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  @media (max-width: 462px) {
    .title {
      font-size: 32px;
    }
  }
</style>