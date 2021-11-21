<script>
	import Card from '$lib/Card.svelte';
	import classes from '../../../resources/crafting-classes.js';
</script>

<svelte:head>
  <title>Permia - Crafting Classes</title>
  <meta name="keywords" content="Permia, Roleplay, Crafting, Classes" />
  <meta name="description" content="A list of all the crafting classes available to play within the permia roleplay setting">
</svelte:head>

{#each Object.keys(classes) as classType}
  <Card body class="mb-3" to="/classes/crafting/{classType}">
    <h2 class="fs-1">
      {@html classes[classType].icon}
      {classes[classType].title}
    </h2>
    <p>
      {classes[classType].description || "Coming Soon!"}
    </p>
  </Card>
{/each}