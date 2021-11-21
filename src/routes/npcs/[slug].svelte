<script context="module">
	import npcs from '../../resources/npcs.js';
  
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
		return {
      props: {
        npcList: npcs[page.params.slug],
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';
  
  export let npcList;
</script>

<svelte:head>
	<title>Permia - {npcList?.title || 'NPCs'}</title>
  <meta name="keywords" content="Permia, Roleplay, Lore, Story" />
  <meta name="description" content="A list of NPCs">
</svelte:head>

{#each npcList.content as npc}
  <Card body class="mb-3">
    <div class="row">
      <div class="col-sm-4">
        <img src={npc.image} alt={npc.title} />
      </div>
      <div class="col-sm-8">
        <h2 class="fs-2">{npc.title}</h2>
        <p>
          Located: {npc.location}
        </p>
        <p>
          {npc.description}
        </p>
      </div>
    </div>
  </Card>
{/each}