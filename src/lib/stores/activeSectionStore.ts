// src/lib/stores/activeSectionStore.ts
// This file defines a Svelte writable store, which is a reactive data source.

// Importing the 'writable' function from 'svelte/store'.
// 'writable' creates a store that can be updated from anywhere by calling its .set() or .update() methods.
import { writable } from 'svelte/store';

// activeSectionIdStore:
// This store is designed to hold the string ID of the currently active section on the page.
// For example, its value could be 'hero', 'about', 'skills', etc., corresponding to the 'id' attributes
// of your <section> elements in +page.svelte.
//
// How it's used:
// 1. In +layout.svelte: Global scroll event listeners calculate which section is currently in view
//    and then update this store's value using `activeSectionIdStore.set(newActiveId)`.
// 2. In Navbar.svelte: The navigation buttons subscribe to this store (`$activeSectionIdStore`)
//    to apply the 'active' CSS class to the corresponding link, highlighting it.
// 3. Other components (e.g., individual section components) could also subscribe to this store
//    if they need to react when they become the active section (e.g., to trigger an animation).
//
// Initial value:
// It's initialized with an empty string (''), meaning no section is active by default until
// the scroll detection logic in +layout.svelte first calculates an active section.
export const activeSectionIdStore = writable<string>('');
