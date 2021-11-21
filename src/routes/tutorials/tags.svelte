<script>
	import Card from '$lib/Card.svelte';
	import tutorials from '../../resources/tutorials.js';

  const tags = tutorials.tags.content;
</script>

<svelte:head>
	<title>Permia - Tags</title>
  <meta name="keywords" content="Permia, Roleplay, Tags" />
  <meta name="description" content="A list of RP tags">
</svelte:head>

{#each tags as tag}
  <Card body class="mb-3">
    <h2 class="fs-1">{tag.title}</h2>
    <p>
      {tag.description}
    </p>
  </Card>
{/each}