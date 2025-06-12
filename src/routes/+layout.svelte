<script lang="ts">
	import '../global.css'; // Global styles
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import { activeSectionIdStore } from '$lib/stores/activeSectionStore'; // Import the global store
	import { tick } from 'svelte'; // For ensuring DOM is ready before measuring elements

	// Instead of receiving 'sections' from a 'data' prop, we define it directly here.
	// This bypasses the 'export let data' line that was causing the compiler error.
	const sections = [
		{ id: 'hero', name: 'Home' },
		{ id: 'about', name: 'About' },
		{ id: 'skills', name: 'Skills' },
		{ id: 'projects', name: 'Projects' },
		{ id: 'contact', name: 'Contact' }
	];

	// Expose the 'children' prop using $props() so it can be rendered by {@render children()}
	let { children } = $props();

	// --- Global Scroll Observation Logic ---
	let resizeTimeout: ReturnType<typeof setTimeout>;
	let scrollTimeout: ReturnType<typeof setTimeout>;

	// Function to calculate the active section ID based on scroll position
	function calculateActiveSection(sectionsData: { id: string; name: string }[]): string {
		let activeId = '';
		const navbarHeightEstimate = 60; // Approximate height of your Navbar
		const activationOffset = 10; // Small offset below navbar for visual comfort
		const activationThreshold = navbarHeightEstimate + activationOffset; // e.g., 70px from top of viewport

		// Iterate sections in forward order (from top to bottom of the page)
		// The last section that meets the criteria will be selected.
		for (const section of sectionsData) {
			const element = document.getElementById(section.id);
			if (element) {
				const rect = element.getBoundingClientRect();

				// A section is considered active if:
				// 1. Its top edge has scrolled past or is at the activation threshold
				//    (meaning it's now visually prominent at the top of the viewport)
				// 2. Its bottom edge has not yet scrolled completely out of the viewport (i.e., it's still visible)
				if (rect.top <= activationThreshold && rect.bottom > 0) {
					activeId = section.id;
					// DO NOT break here. This ensures that if multiple sections briefly overlap
					// the threshold (e.g., a very short section), the last one encountered (which is
					// visually lower on the page) will be chosen.
				}
			}
		}

		// Edge case: If no section is clearly active (e.g., at the very top of the page,
		// or just scrolled up past the first section), default to the first section.
		if (!activeId && sectionsData.length > 0 && window.scrollY < activationThreshold) {
			activeId = sectionsData[0].id;
		}

		return activeId;
	}

	// Effect to observe scroll and resize and update the global activeSectionIdStore
	$effect(() => {
		const updateActiveId = async () => {
			await tick(); // Ensure DOM has settled before measuring
			// 'sections' is now directly available in this component's scope
			const newActiveId = calculateActiveSection(sections);
			activeSectionIdStore.set(newActiveId); // Update the global store
		};

		const handleScroll = () => {
			clearTimeout(scrollTimeout);
			scrollTimeout = setTimeout(updateActiveId, 50); // Debounce scroll event
		};

		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(updateActiveId, 100); // Longer debounce for resize
		};

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		// Cleanup: remove event listeners when component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
			clearTimeout(scrollTimeout);
			clearTimeout(resizeTimeout);
		};
	});

	// Initial check on mount
	onMount(() => {
		// Perform initial calculation to set the active section when the page loads
		tick().then(() => {
			const initialActiveId = calculateActiveSection(sections);
			activeSectionIdStore.set(initialActiveId);
		});
	});
</script>

<div class="app-container">
	<!-- Pass the sections array as a prop to Navbar -->
	<!-- Navbar will now subscribe to activeSectionIdStore internally -->
	<Navbar {sections} />

	<!-- The <slot /> is deprecated in Svelte 5. Using {@render children()} instead. -->
	{@render children()}
</div>

<style>
	.app-container {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	/* Ensure the body itself doesn't have default margins that conflict */
	:global(body) {
		margin: 0;
		padding: 0;
		overflow-x: hidden; /* Prevent horizontal scrollbar if elements go off-screen */
	}
</style>
