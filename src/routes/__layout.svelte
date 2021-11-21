<script context="module">
	export const prerender = true;
</script>

<script lang="ts">
  import headers from "../resources/navigation.js";
	import '../app.scss';

  let openNavbar = false;
  let openHeader = null;
  let openDropdown = null;

  let updateHeader = (value) => {
    if (openHeader === value) { openHeader = null; openDropdown = null; }
    else { openHeader = value; }
  }
  let updateDropdown = (value) => {
    if (openDropdown === value) { openDropdown = null; }
    else { openDropdown = value; }
  }
  let handleContentClick = () => {
    openNavbar = false;
    openHeader = null;
    openDropdown = null;
  }
</script>

<main>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark" style="z-index:50;" on:click={handleContentClick}>
      <div class="container align-items-center flex-wrap">
        <a class="navbar-brand text-decoration-none" href="/">
          <img 
              class="rounded-circle" 
              height="25px" 
              width="25px" 
              src="/favicon.png" 
              alt="Permia Logo" />
          Permia
        </a>
        <button
            class="navbar-toggler" 
            type="button"
            on:click|stopPropagation={() => openNavbar = !openNavbar}
            aria-expanded={openNavbar}
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse flex-grow-0 {openNavbar ? "show" : "d-none"}">
          <ul class="navbar-nav">
            {#each headers as header}
              <li class="nav-item dropdown">
                <span
                    class="nav-link dropdown-toggle"
                    role="button"
                    on:click|stopPropagation={() => updateHeader(header.title)}
                    aria-expanded={openHeader === header.title}>
                  {header.title}
                </span>
                <ul class="dropdown-menu dropdown-menu-dark {openHeader === header.title ? "show" : "hide"}" style="{header.right ? "right:0" : ""}">
                  {#each header.dropdowns as dropdown}
                    {#if dropdown.dropdowns}
                      <li class="nav-item dropdown">
                        <span
                            class="nav-link dropdown-toggle mx-3"
                            role="button"
                            on:click|stopPropagation={() => updateDropdown(dropdown.content)}
                            aria-expanded={openDropdown === dropdown.content}>
                          {dropdown.content}
                        </span>
                        <ul class="dropdown-menu dropdown-menu-dark mx-1 {openDropdown === dropdown.content ? "show" : "hide"}" style="position:static" aria-labelledby="navbarDropdown{dropdown.title}">
                          {#if dropdown.index}
                            <li>
                              <a class="dropdown-item text-decoration-none" href="/{dropdown.route}/" on:click={() => handleContentClick()}>All {dropdown.content}</a>
                            </li>
                            <li><hr class="dropdown-divider" /></li>
                          {/if}
                          {#each Object.keys(dropdown.dropdowns) as contentKey (contentKey)}
                            <li>
                              <a class="dropdown-item text-decoration-none" href="/{dropdown.route}/{contentKey}" on:click={() => handleContentClick()}>{dropdown.dropdowns[contentKey].title}</a>
                            </li>
                          {/each}
                        </ul>
                      </li>
                    {:else}
                      <li>
                        {#if dropdown.newTab}
                          <a class="dropdown-item text-decoration-none" href="/{dropdown.route}/" on:click={() => handleContentClick()} target="_blank" rel="external noopener noreferrer">{@html dropdown.content}</a>
                        {:else}
                        <a class="dropdown-item text-decoration-none" href="/{dropdown.route}/" on:click={() => handleContentClick()}>{dropdown.content}</a>
                        {/if}
                      </li>
                    {/if}
                  {/each}
                </ul>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div class="content py-3" on:click={handleContentClick}>
    <div class="container">
      <slot />
    </div>
  </div>
</main>

<style>
  main {
    height: 100vh;
  }

  .content {
    position: absolute;
    height: calc(100vh - 57px);
    width: 100vw;
    left: 0;
    top: 57px;
    overflow-y: auto;
    background-image: url('/permia-background.webp');
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>