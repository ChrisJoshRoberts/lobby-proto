<script>
  import { gameName, isModalOpen } from "$lib/stores";
  function closeModal() {
    $isModalOpen = false;
  }
</script>
<div class="background">
  <div class="modal">
    <img src="assets/Tick.png" alt="tick" class="tick-icon" />
    <h1>Success!</h1>
    <h2>You clicked,<br> <span>{$gameName}</span></h2>
    <button onclick={closeModal}>Close</button>
  </div>
</div>

<style>
  h1 {
    font-size: 40px;
    font-weight: 700;
  }
  span {
    color: #5EE74E;
    font-weight: 700;
    font-size: 24px;
  }
  .tick-icon {
    width: 150px;
    height: 150px;
    margin-bottom: 16px;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    box-shadow: rgba(68, 105, 137, 0.48) 6px 2px 16px 0px, rgba(67, 116, 161, 0.8) -6px -2px 16px 0px;
    width: 50%;
    height: 50%;
    background-color: #222531;
  }
  h2 {
    color: white;
    text-align: center;
    font-weight: 300;
  }

  button {
    margin: 16px;
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
  @media (max-width: 660px) {
    .modal {
      width: 80%;
      height: 60%;
    }
  }
</style>