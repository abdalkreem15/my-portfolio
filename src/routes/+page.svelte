<script lang="ts">
	// Import your Hero component
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Skills from '$lib/components/Skills.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Contact from '$lib/components/Contact.svelte';

	// Removed the 'data' prop declaration and destructuring for 'sections'
	// as this component does not directly use 'sections' from a data prop
	// and the Navbar receives it directly from +layout.svelte.
</script>

<main>
	<section id="hero">
		<Hero />
	</section>

	<!-- Placeholder sections for now. You will replace these with actual components -->
	<section id="about">
		<About />
	</section>

	<section id="skills">
		<Skills />
	</section>

	<section id="projects">
		<Projects />
	</section>

	<section id="contact">
		<Contact />
	</section>
</main>

<style>
	/* Basic styling for all sections to make them distinguishable and provide scrolling targets */
	section {
		min-height: 100vh; /* Makes each section fill the viewport height */
		padding: var(--spacing-xxl) var(--spacing-md); /* Consistent padding from global styles */
		display: flex;
		flex-direction: column;
		justify-content: center; /* Vertically center content within section */
		align-items: center; /* Horizontally center content within section */
		width: 100%;
		text-align: center;
	}

	/* Alternating background colors for visual separation, using defined dark mode variables */
	#hero {
		background-color: var(--color-background-main);
		color: var(--color-text-main);
	}
	#about {
		background-color: var(--color-background-elevated);
		color: var(--color-text-main);
	}
	#skills {
		background-color: var(--color-background-main);
		color: var(--color-text-main);
	}
	#projects {
		background-color: var(--color-background-elevated);
		color: var(--color-text-main);
	}
	#contact {
		background-color: var(--color-background-main);
		color: var(--color-text-main);
	}

	/* Ensure h2 in sections has consistent styling */
	/* section h2 {
		font-size: 2.5rem;
		margin-bottom: var(--spacing-lg);
		color: var(--color-primary); 
	} */

	/* Responsive adjustments for section padding on smaller screens */
	/* @media (max-width: 768px) {
		section {
			padding: var(--spacing-xl) var(--spacing-md);
		}
		section h2 {
			font-size: 2rem;
		}
	} */

	/* @media (max-width: 480px) {
		section {
			padding: var(--spacing-lg) var(--spacing-sm);
		}
		section h2 {
			font-size: 1.8rem;
		}
	} */
</style>
