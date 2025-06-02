<script>
  import { SendHorizontal, MessageCircleMore, CircleUserRound, ChevronsRight } from 'lucide-svelte';

  const Messages = [
    {time: '10:30 AM', user: 'Theressa Webb', message: 'Hey, how are you?', avatar: 'https://i.pravatar.cc/150?img=1'},
    {time: '10:32 AM', user: 'Jacob Jones', message: 'I am good, thanks! You?', avatar: 'https://i.pravatar.cc/150?img=2'},
    {time: '10:33 AM', user: 'Theressa Webb', message: 'Doing well! Ready for the game?', avatar: 'https://i.pravatar.cc/150?img=1'},
    {time: '10:34 AM', user: 'Jacob Jones', message: 'Absolutely! Let\'s win this.', avatar: 'https://i.pravatar.cc/150?img=2'},
    {time: '10:35 AM', user: 'Leslie Alexander', message: 'Good luck everyone!', avatar: 'https://i.pravatar.cc/150?img=3'},
    {time: '10:36 AM', user: 'Jenny Wilson', message: 'Let\'s go team!', avatar: 'https://i.pravatar.cc/150?img=4'},
    {time: '10:37 AM', user: 'Kristin Watson', message: 'Excited to play!', avatar: 'https://i.pravatar.cc/150?img=5'},
    {time: '10:38 AM', user: 'Darlene Robertson', message: 'Who is hosting?', avatar: 'https://i.pravatar.cc/150?img=6'},
    {time: '10:39 AM', user: 'Theressa Webb', message: 'I can host if needed.', avatar: 'https://i.pravatar.cc/150?img=1'},
    {time: '10:40 AM', user: 'Jacob Jones', message: 'Thanks, Theressa!', avatar: 'https://i.pravatar.cc/150?img=2'},
    {time: '10:41 AM', user: 'Jenny Wilson', message: 'Invite sent!', avatar: 'https://i.pravatar.cc/150?img=4'},
    {time: '10:42 AM', user: 'Leslie Alexander', message: 'See you all in the lobby.', avatar: 'https://i.pravatar.cc/150?img=3'},
  ];

</script>

<div class="right-main">
  <div class="top-toggle">
    <div class="toggle-item">
      <MessageCircleMore color='#F4C656' fill="#F4C656" />
      <p>25 <span>Players Online</span></p>
    </div>
    <div class="toggle-item">
      <CircleUserRound color='#F4C656' />
      <p>1857</p>
    </div>
    <ChevronsRight strokeWidth={1}  />
  </div>
  <div class="chat-wrapper" >
    {#each Messages as message}
      <div class="chat-card">
        <div class="img-wrapper">
          <img src={message.avatar} alt="avatar" class="avatar" />
        </div>
        <div class="user-detials">
          <p class="name">{message.user}</p>
          <p class="message">{message.message}</p>
        </div>
        <div class='time'>
          <p class="time">{message.time}</p>
        </div>
      </div>
    {/each}
  </div>
  <div class="chat-input">
    <p>Send a message</p>
    <SendHorizontal />
  </div>
</div>

<style>
  .chat-wrapper {
    overflow-y: scroll;
    height: 85%;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  .time {
    font-weight: 300;
    color: #b4dfff91;
    font-size: 12px;
  }
  .name {
    font-weight: 400;
    color: #ffffff;
  }
  .message {
    font-weight: 300;
    color: #b4dfff91;
    font-size: 14px;
  }
  .chat-card {
    display: flex;
    gap: 4px;
    justify-content: space-between;
    background-color:#2a2d3c;
    margin: 16px;
    padding: 8px;
    border-radius: 8px;
  }
  p {
    font-weight: 600;
  }
  span {
    font-weight: 300;
    color: #b4dfff91;
  }
  .top-toggle{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #606992;
    align-items: center;
    padding: 8px
  }
  .toggle-item {
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 4px;
  }
  .right-main {
    overflow: hidden;
    margin: 24px;
    position: relative;
    top: 78px;
    background-color: #1F1F2D;
    width: 300px;
    height: 85%;
    border-radius: 16px;
  }
  .chat-input {
    position: absolute;
    bottom: 16px;
    left: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 8px;
    gap: 8px;
    background-color: #3f4665;
    width: 93%;

    p {
      opacity: 0.5;
    }
  }
</style>