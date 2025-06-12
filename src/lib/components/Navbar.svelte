<script lang="ts">
	// We no longer need onMount, scrollY state, or scroll/resize effects here,
	// as +layout.svelte manages the global scroll detection and updates the store.
	import { activeSectionIdStore } from '$lib/stores/activeSectionStore'; // Import the global store

	// Props using $props() rune
	let { sections }: { sections: { id: string; name: string }[] } = $props();

	// Reactive state for the burger menu's open/closed state (still local to Navbar)
	let isMenuOpen = $state(false);

	// Handle smooth scrolling to section
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			// When clicking, we set the store's value directly to ensure immediate highlight
			activeSectionIdStore.set(id);
			element.scrollIntoView({ behavior: 'smooth' });
			isMenuOpen = false; // Close the menu after clicking a link
		}
	};

	// Toggle burger menu state (still local)
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	// Close menu if window is resized to a larger size (desktop)
	// This effect is specific to the Navbar's mobile menu toggle
	$effect(() => {
		const handleResize = () => {
			if (window.innerWidth > 768 && isMenuOpen) {
				isMenuOpen = false;
			}
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});
</script>

<nav>
	<div class="nav-content">
		<!-- Manual SVG Logo added here -->
		<div class="site-logo">
			<span class="logo-ak">AK</span>
			<span class="logo-007">007</span>
		</div>

		<button
			class="burger-menu"
			onclick={toggleMenu}
			aria-expanded={isMenuOpen}
			aria-label="Toggle navigation menu"
		>
			{#if isMenuOpen}
				<!-- Close icon (e.g., 'X') -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-x"
					><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
					></line></svg
				>
			{:else}
				<!-- Burger icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-menu"
					><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"
					></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
				>
			{/if}
		</button>

		<ul class:menu-open={isMenuOpen}>
			{#each sections as section (section.id)}
				<li>
					<button
						onclick={() => scrollToSection(section.id)}
						class:active={$activeSectionIdStore === section.id}
					>
						{section.name}
					</button>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: rgba(40, 42, 54, 0.6);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		padding: var(--spacing-sm) var(--spacing-lg);
		box-shadow: var(--shadow-md);
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-content {
		max-width: 1200px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	/* Styles for the site logo */
	.site-logo {
		color: var(--color-primary-accent);
		font-weight: bold;
		font-size: 1.25rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
		cursor: default;
		line-height: 1;
	}

	.site-logo .logo-ak {
		font-size: 1.4em;
	}

	.site-logo .logo-007 {
		font-size: 0.8em;
		opacity: 0.8;
	}

	ul {
		list-style: none;
		display: flex;
		justify-content: center;
		gap: var(--spacing-xl);
		margin: 0;
		padding: 0;
		transition:
			transform 0.3s ease-in-out,
			opacity 0.3s ease-in-out;
	}

	button {
		background: none;
		border: none;
		font-size: var(--font-size-base);
		font-weight: 500;
		color: var(--color-text-main);
		cursor: pointer;
		padding: 10px 15px;
		/* Updated transition to include padding-bottom */
		transition:
			color 0.3s ease,
			font-weight 0.3s ease,
			border-bottom 0.3s ease,
			background-color 0.3s ease,
			padding-bottom 0.3s ease;
		border-radius: var(--border-radius-sm);
	}

	button:hover {
		color: var(--color-primary);
		background-color: rgba(255, 255, 255, 0.1);
	}

	/* RE-ENABLED .active style for desktop navigation buttons */
	button.active {
		color: var(--color-primary);
		font-weight: bold;
		border-bottom: 2px solid var(--color-primary);
		padding-bottom: 8px;
	}

	/* Burger Menu Styles */
	.burger-menu {
		display: none; /* Hidden by default on larger screens */
		color: var(--color-text-main);
		padding: 8px;
		border-radius: var(--border-radius-sm);
		transition: background-color 0.3s ease;
	}

	.burger-menu:hover {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.burger-menu svg {
		display: block;
		width: 24px;
		height: 24px;
	}

	/* Media query for smaller screens */
	@media (max-width: 768px) {
		.burger-menu {
			display: block;
			position: relative;
			z-index: 1001;
		}

		.nav-content {
			justify-content: space-between;
		}

		ul {
			position: fixed;
			top: 0;
			right: 0;
			width: 100%;
			height: calc(100vh - 60px);
			background-color: var(--color-background-main);
			flex-direction: column;
			justify-content: flex-start;
			align-items: flex-start;
			padding-top: 60px;
			padding-left: var(--spacing-xxl);
			box-shadow: -2px 0 5px rgba(0, 0, 0, 0.4);
			transform: translateX(100%);
			opacity: 0;
			pointer-events: none;
			overflow-y: auto;
		}

		ul.menu-open {
			transform: translateX(0);
			opacity: 1;
			pointer-events: all;
		}

		ul li {
			margin: var(--spacing-sm) 0;
			width: 100%;
		}

		ul li button {
			display: block;
			width: 100%;
			text-align: left;
			padding: var(--spacing-md) var(--spacing-md);
			font-size: 1.1rem;
			color: var(--color-text-main);
		}

		/* RE-ENABLED active style for mobile menu items */
		ul li button.active {
			color: var(--color-primary);
			font-weight: bold;
			background-color: rgba(255, 255, 255, 0.15);
			border-bottom: none;
			border-left: 4px solid var(--color-primary);
			border-radius: 0;
		}
	}
</style>
