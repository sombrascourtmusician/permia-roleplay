<script context="module">
	import afflicted from '../../resources/afflicted.js';

  const keys = Object.keys(afflicted);

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
    const index = keys.indexOf(page.params.slug);

		return {
      props: {
        shifter: afflicted[page.params.slug],
        nextLink: (keys.length > index+1) && `/afflicted/${keys[index+1]}`,
        nextTitle: (keys.length > index+1) && afflicted[keys[index+1]].title,
        prevLink: (index > 0) && `/afflicted/${keys[index-1]}`,
        prevTitle: (index > 0) && afflicted[keys[index-1]].title,
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';

  export let shifter;
  export let nextLink;
  export let nextTitle;
  export let prevLink;
  export let prevTitle;
</script>

<svelte:head>
  <title>Permia - {shifter?.title || 'Afflicted'}</title>
  <meta name="keywords" content="Permia, Roleplay, {shifter.title}" />
  <meta name="description" content="A summary of the {shifter.title} category of Afflicted within the permia roleplay setting.">
</svelte:head>

<Card body>
	{#if shifter && shifter.title}
    <div class="row">
      <div class="col-sm-6">
        <h1>{shifter.title}</h1>
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
    {@html shifter.summary}
    
		<ul class="list-group">
			{#each shifter.subTypes as subType}
				<li class="list-group-item list-group-item-dark">
          <div class="row">
            <div class="col-sm-6 fw-bold">{subType.name}</div>
            <div class="col-sm-6 text-muted text-sm-end">{subType.stats}</div>
          </div>
					<p>{subType.description}</p>
          <div class="row">
            <div class="col-sm-6">
              {subType.skill.name}
              {#if subType.skill.cost}{' - '}{subType.skill.cost}{/if}
            </div>
            <div class="col-sm-6 text-muted text-sm-end">
              {#if subType.skill.scaling}
              Scales with {subType.skill.scaling}
              {/if}
            </div>
          </div>
					{subType.skill.description}
				</li>
			{/each}
    </ul>
	{/if}
</Card>
