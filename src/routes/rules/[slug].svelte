<script context="module">
	import rules from '../../resources/rules.js';

  const keys = Object.keys(rules);

	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ page }) {
    const index = keys.indexOf(page.params.slug);

		return {
      props: {
        ruleSet: rules[page.params.slug],
        nextLink: (keys.length > index+1) && `/rules/${keys[index+1]}`,
        nextTitle: (keys.length > index+1) && rules[keys[index+1]].title,
        prevLink: (index > 0) && `/rules/${keys[index-1]}`,
        prevTitle: (index > 0) && rules[keys[index-1]].title,
      }
		};
	}
</script>

<script>
	import Card from '$lib/Card.svelte';

  export let ruleSet;
  export let nextLink;
  export let nextTitle;
  export let prevLink;
  export let prevTitle;
</script>

<svelte:head>
	<title>{ruleSet?.title || 'Rules'}</title>
  <meta name="keywords" content="Permia, Roleplay, Rules" />
  <meta name="description" content="A summary of permia's {ruleSet.title}">
</svelte:head>

<Card body>
	{#if ruleSet && ruleSet.title}
    <div class="row">
      <div class="col-sm-6">
        <h1>{ruleSet.title}</h1>
      </div>
      <div class="col-sm-6 text-end">
        {#if prevLink}
        <a class="btn btn-secondary" href={prevLink}>{prevTitle}</a>
        {/if}
        {#if nextLink}
          <a class="btn btn-secondary ms-2" href={nextLink}>{nextTitle}</a>
        {/if}
      </div>
    </div>
    <ol>
      {#each ruleSet.rules as rule}
        <li class="my-2">{@html rule}</li>
      {/each}
    </ol>
	{/if}
</Card>
