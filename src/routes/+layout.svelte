<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import '../app.css'; // Global CSS styles
    import Navbar from '$lib/components/Navbar.svelte'; // Assuming Navbar.svelte
    import { onMount } from 'svelte';
    import { activeSectionIdStore } from '$lib/stores/activeSectionStore';

    // IMPORTANT: Manually update this version string every time you deploy new changes.
    // For example, change '2024-01-01.1' to '2024-01-01.2' or 'v1.0.1' to 'v1.0.2'
    const APP_VERSION = '2025-06-13.1'; // Update this after each deployment!

    let sections = $state([
        { id: 'hero', name: 'Home' },
        { id: 'about', name: 'About' },
        { id: 'skills', name: 'Skills' },
        { id: 'projects', name: 'Projects' },
        { id: 'contact', name: 'Contact' }
    ]);

    onMount(() => {
        // --- Client-Side Cache Busting Logic ---
        const lastKnownVersion = localStorage.getItem('app_version');

        if (lastKnownVersion && lastKnownVersion !== APP_VERSION) {
            // A new version of the app is detected, force a hard reload
            console.log(`New app version detected: ${APP_VERSION}. Forcing reload from ${lastKnownVersion}.`);
            window.location.reload(); // Forces a reload from the server (hard reload)
        } else if (!lastKnownVersion) {
            // First visit or app_version not set, set it
            localStorage.setItem('app_version', APP_VERSION);
        } else {
            // Version matches, no action needed
            console.log(`App version ${APP_VERSION} is up to date.`);
        }
        localStorage.setItem('app_version', APP_VERSION); // Always update to current version


        // --- Original Scroll Logic for Active Section Highlighting ---
        let observer: IntersectionObserver;

        const setupIntersectionObserver = () => {
            const options = {
                root: null, // Use the viewport as the root
                rootMargin: '0px',
                threshold: 0.5 // Trigger when 50% of the section is visible
            };

            observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Update the active section store with the ID of the intersecting section
                        activeSectionIdStore.set(entry.target.id);
                    }
                });
            }, options);

            // Observe each section
            sections.forEach((section) => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.observe(element);
                }
            });
        };

        // Delay setup to ensure all content is rendered
        // This is a common workaround for DOM elements not being ready immediately
        // after onMount, especially for sections dynamically loaded or rendered.
        setTimeout(setupIntersectionObserver, 100);

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    });
</script>

<div class="layout-container">
    <Navbar {sections} />
    <!-- svelte-ignore slot_element_deprecated -->
    <main>
        <slot />
    </main>
</div>

<style>
    .layout-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: var(--color-background-main);
        color: var(--color-text-main);
        font-family: var(--font-family-base);
    }

    main {
        flex-grow: 1;
        /* Padding to prevent content from being hidden by fixed navbar, if any */
        padding-top: var(--navbar-height, 0px); /* Adjust based on your Navbar's height */
    }
</style>
