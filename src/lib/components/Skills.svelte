<!-- src/lib/components/Skills.svelte -->
<script lang="ts">
	// Define the structure for a skill item
	interface Skill {
		name: string;
		description: string;
		// Now using a URL for the SVG icon, assuming it's in the static directory
		iconUrl: string;
	}

	// Your list of skills, now referencing external SVG files
	// IMPORTANT: Replace these placeholder URLs with the actual paths to your SVG files
	// in your `static` directory. For example, if you put `html5.svg` in `static/svgs/`,
	// the URL would be `/svgs/html5.svg`.
	const skills: Skill[] = [
		{
			name: 'HTML5',
			description: 'Building semantic and accessible web page structures.',
			iconUrl: '/svgs/html5.svg'
		},
		{
			name: 'CSS3',
			description: 'Styling engaging and responsive user interfaces.',
			iconUrl: '/svgs/css3.svg'
		},
		{
			name: 'JavaScript',
			description: 'Adding interactivity and dynamic behavior to web applications.',
			iconUrl: '/svgs/javascript.svg'
		},
		{
			name: 'Svelte',
			description: 'Building highly performant and reactive user interfaces with ease.',
			iconUrl: '/svgs/svelte.svg'
		},
		{
			name: 'Typescript',
			description: 'Its javascript but with types!',
			iconUrl: '/svgs/typescript.svg'
		},
		{ // Added missing opening curly brace here
			name: 'Game dev with Unity', // Changed to "Unity" for consistency in name
			description: 'Developing interactive 2D and 3D games with the Unity engine and C#.', 
			iconUrl: '/svgs/unity.svg'
		},
        { // Added missing opening curly brace here
			name: 'Game dev with Godot', // Changed to "Unity" for consistency in name
			description: 'Developing interactive 2D and 3D games with the Godot game engine and GDScript.', 
			iconUrl: '/svgs/Godot.svg'
		},
	];
</script>

<div class="skills-section">
	<div class="container">
		<h2>My Skills</h2>
		<p class="skills-intro">A growing toolkit for crafting modern web experiences.</p>

		<div class="skills-grid">
			{#each skills as skill (skill.name)}
				<div class="skill-card">
					<div class="skill-icon">
						<!-- Use an <img> tag to load the external SVG file -->
						<img
							src={skill.iconUrl}
							alt="{skill.name} icon"
							class="skill-svg-image"
							on:error={(e) => {
								// Fallback image if SVG fails to load
								const imgElement = e.currentTarget as HTMLImageElement;
								imgElement.onerror = null;
								imgElement.src = 'https://placehold.co/60x60/44475a/f8f8f2?text=SVG+Error';
							}}
						/>
					</div>
					<h3 class="skill-name">{skill.name}</h3>
					<p class="skill-description">{skill.description}</p>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
    .skills-section {
        background-color: var(--color-background-main); /* Alternating background */
        color: var(--color-text-main);
        padding: var(--spacing-xxl) var(--spacing-md);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-xl); /* Increased gap for overall section content */
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: var(--spacing-lg);
        color: var(--color-primary);
    }

    .skills-intro {
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xxl); /* More space before grid */
        max-width: 700px;
        line-height: var(--line-height-base);
    }

    .skills-grid {
        display: grid;
        /* Default to auto-fit, allowing flexible columns based on minmax */
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--spacing-xl); /* Gap between skill cards */
        width: 100%;
        max-width: 1200px;
        justify-content: center;
    }

    .skill-card {
        background-color: var(--color-background-elevated);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-md);
        padding: var(--spacing-lg);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .skill-card:hover {
        transform: translateY(-5px); /* Lift effect on hover */
        box-shadow: var(--shadow-lg); /* Enhanced shadow on hover */
    }

    .skill-icon {
        width: 60px; /* Adjust icon container size */
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: var(--spacing-md);
    }

    .skill-svg-image {
        width: 100%; /* Make the image fill its container */
        height: 100%;
        object-fit: contain; /* Ensure the SVG fits within the container without cropping */
    }

    .skill-name {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: var(--spacing-sm);
        color: var(--color-text-main);
    }

    .skill-description {
        font-size: 0.95rem; /* Base font size for description */
        color: var(--color-text-secondary);
        line-height: 1.5;
        max-width: none; /* Allow text to use full available width in the card */
        margin-left: auto;
        margin-right: auto;
    }

    /* Responsive adjustments for Skills (closer to original structure) */
    @media (max-width: 1024px) {
        .skills-grid {
            /* On medium screens, try to fit 3 columns if space allows, otherwise 2 */
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--spacing-lg);
        }
        .skill-card {
            padding: var(--spacing-md);
        }
        .skill-description {
            font-size: 0.9rem; /* Slightly smaller font */
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }
        .skills-grid {
            grid-template-columns: repeat(2, 1fr); /* Explicitly 2 columns for tablets */
            gap: var(--spacing-lg);
        }
        .skills-intro {
            font-size: 1rem;
            margin-bottom: var(--spacing-xl);
        }
        .skill-description {
            font-size: 0.85rem; /* Further adjustment for smaller tablets */
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.8rem;
        }
        .skills-grid {
            grid-template-columns: 1fr; /* Single column on very small screens */
            gap: var(--spacing-md);
        }
        .skill-icon {
            width: 50px;
            height: 50px;
        }
        .skill-name {
            font-size: 1.3rem;
        }
        .skill-description {
            font-size: 0.9rem;
            max-width: none; /* No max-width on mobile */
        }
    }
</style>
