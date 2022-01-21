<script>
	import Card from '$lib/Card.svelte';
</script>

<svelte:head>
	<title>Permia - HUD tutorial</title>
  <meta name="keywords" content="Permia, Roleplay, Tutorial, HUD" />
  <meta name="description" content="A summary of permia's HUD">
</svelte:head>

<Card body>
  <h2>Permia's HUD behaves as follows:</h2>
  <img class="pb-2" width="100%" src="/permia-hud-tutorial1.png" alt="HUD description" />
  <h2>Clicking on the main button shows the following:</h2>
  <img class="pb-2" width="100%" src="/permia-hud-tutorial2.png" alt="HUD description" />
  <h2>Clicking on the dice button shows the following:</h2>
  <img class="pb-2" width="100%" src="/permia-hud-tutorial3.png" alt="HUD description" />
  <h2>Video example:</h2>
  <video controls width="100%">
    <source src="https://cdn.discordapp.com/attachments/322561050941718528/927425810829312100/Hud_video_tutorial.mp4" type="video/mp4">
    <track kind="captions">
      Sorry, your browser doesn't support embedded videos.
  </video>
</Card>
