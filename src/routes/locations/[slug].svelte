<script context="module">
	import locations from '../../resources/locations.js';

  const keys = Object.keys(locations);

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
    const index = keys.indexOf(page.params.slug);

		return {
      props: {
        location: locations[page.params.slug],
        nextLink: (keys.length > index+1) && `/locations/${keys[index+1]}`,
        nextTitle: (keys.length > index+1) && locations[keys[index+1]].title,
        prevLink: (index > 0) && `/locations/${keys[index-1]}`,
        prevTitle: (index > 0) && locations[keys[index-1]].title,
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';

  export let location;
  export let nextLink;
  export let nextTitle;
  export let prevLink;
  export let prevTitle;
</script>

<svelte:head>
	<title>Permia - {location?.title || 'Locations'}</title>
  <meta name="keywords" content="Permia, Roleplay, Lore, Story" />
  <meta name="description" content="A summary of permia's locations - specifically {location.title}">
</svelte:head>

<Card body>
	{#if location && location.title}
    <div class="row mb-3">
      <div class="col-sm-6">
        <h1>{location.title}</h1>
      </div>
      <div class="col-sm-6 text-end">
        {#if prevLink}
        <a href={prevLink} class="btn btn-secondary">{prevTitle}</a>
        {/if}
        {#if nextLink}
        <a href={nextLink} class="btn btn-secondary">{nextTitle}</a>
        {/if}
      </div>
    </div>

    {#each location.subLocations as subLocation, i}
      {#if i !== 0}
        <hr />
      {/if}
      <div class="row">
        <div class="col-sm-6">
          <h2>{subLocation.title}</h2>
          {#each subLocation.content as content}
            <p>{content}</p>
          {/each}
        </div>
        <div class="col-sm-6 {i % 2 === 0 ? 'order-first' : ''}">
          <img src={subLocation.image} width="100%" alt={subLocation.title} />
        </div>
      </div>
    {/each}
	{/if}
</Card>
