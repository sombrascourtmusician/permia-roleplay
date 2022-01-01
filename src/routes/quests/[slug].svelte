<script context="module">
	import quests from '../../resources/quests.js';

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		return {
      props: {
        availableQuests: quests[page.params.slug]
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';
  
  export let availableQuests;
</script>

<svelte:head>
	<title>Permia - Quests</title>
  <meta name="keywords" content="Permia, Roleplay, Quests" />
  <meta name="description" content="A list of quests">
</svelte:head>

{#each availableQuests.content as quest}
  <Card body class="mb-3">
    <h2 class="fs-1 text-center">{quest.title}</h2>
    <h3 class="text-center">Rewards: {quest.rewards}</h3>
    
    {#each quest.steps as step, i}
      {#if i !== 0}
        <hr />
      {/if}
      <div class="row">
        <div class="col-sm-6">
          <h2>{step.title}</h2>
          <p>{step.content}</p>
          <p class="fst-italic">"{step.dialogue}"</p>
        </div>
        <div class="col-sm-6 {i % 2 === 0 ? 'order-first' : ''}">
          <img src={step.image} width="100%" alt={step.title} />
        </div>
      </div>
    {/each}
  </Card>
{/each}