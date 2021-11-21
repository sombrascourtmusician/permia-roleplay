<script>
	import Card from '$lib/Card.svelte';
	import classes from '../../../resources/combat-classes.js';
</script>

<svelte:head>
  <title>Permia - Combat Classes</title>
  <meta name="keywords" content="Permia, Roleplay, Combat, Classes" />
  <meta name="description" content="A list of all the combat classes available to play within the permia roleplay setting">
</svelte:head>

{#each Object.keys(classes) as classType}
  <Card body class="mb-3" to="/classes/combat/{classType}">
    <h2 class="fs-1">
      {@html classes[classType].icon}
      {classes[classType].title}
    </h2>
    <p>
      {classes[classType].description || "Coming Soon!"}
    </p>
  </Card>
{/each}