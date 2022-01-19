<script>
	import Card from '$lib/Card.svelte';
	import factions from '../../resources/factions.js';
</script>

<svelte:head>
	<title>Permia - Factions</title>
  <meta name="keywords" content="Permia, Roleplay, Factions" />
  <meta name="description" content="A list of all the factions available to play within the permia roleplay setting">
</svelte:head>

{#each Object.keys(factions) as faction}
  <Card body class="mb-3" to="/factions/{faction}">
    <h2 class="fs-1">{factions[faction].title}</h2>
    {#if factions[faction].otherNames}
      <h3 class="fs-5 pb-3">Also known as {factions[faction].otherNames}</h3>
    {/if}
  </Card>
{/each}