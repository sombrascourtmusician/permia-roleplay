<script context="module">
	import lore from '../../resources/lore.js';

  const keys = Object.keys(lore);

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
    const index = keys.indexOf(page.params.slug);

		return {
      props: {
        story: lore[page.params.slug],
        nextLink: (keys.length > index+1) && `/lore/${keys[index+1]}`,
        nextTitle: (keys.length > index+1) && lore[keys[index+1]].title,
        prevLink: (index > 0) && `/lore/${keys[index-1]}`,
        prevTitle: (index > 0) && lore[keys[index-1]].title,
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';
  
  export let story;
  export let nextLink;
  export let nextTitle;
  export let prevLink;
  export let prevTitle;
</script>

<svelte:head>
	<title>Permia - {story?.title || 'Lore'}</title>
  <meta name="keywords" content="Permia, Roleplay, Lore, Story" />
  <meta name="description" content="A summary of permia's history - specifically {story.title}">
</svelte:head>

<Card body>
	{#if story && story.title}
    <div class="row">
      <div class="col-sm-6">
        <h1>{story.title}</h1>
      </div>
      <div class="col-sm-6 text-end">
        {#if prevLink}
          <a class="btn btn-secondary" href={prevLink}>{prevTitle}</a>
        {/if}
        {#if nextLink}
        <a class="btn btn-secondary" href={nextLink}>{nextTitle}</a>
        {/if}
      </div>
    </div>
    {#each story.body as paragraph}
      <p>{paragraph}</p>
    {/each}
	{/if}
</Card>
