<script lang="ts">
	// Define the structure for a project item
	interface Project {
		id: number;
		title: string;
		description: string;
		imageUrl: string; // Placeholder for project image
		liveUrl?: string; // Optional live demo link
		githubUrl?: string; // Optional GitHub repository link
	}

	// Your list of projects
	// Removed the "Portfolio Website (This One!)" entry.
	const projects: Project[] = [
		{
			id: 2,
			title: 'Interactive Todo App',
			description:
				'A responsive todo application featuring drag-and-drop reordering and persistent storage, built with Svelte and local storage.',
			imageUrl: '/Imgs/todolist.png',
			liveUrl: 'https://todo-list-sepia-iota.vercel.app/',
			githubUrl: 'https://github.com/abdalkreem15/todo-list'
		},
		{
			id: 3,
			title: 'Clock app',
			description:
				'A basic clock application for web browsers, demonstrating fundamental JavaScript logic and clean UI design.',
			imageUrl: '/Imgs/clock.png',
			liveUrl: 'https://clock-app-five-kappa.vercel.app/',
			githubUrl: 'https://github.com/abdalkreem15/Clock-app'
		}
	];
</script>

<div class="projects-section">
	<div class="container">
		<h2>My Projects</h2>
		<p class="projects-intro">
			A selection of my work, demonstrating my frontend development skills.
		</p>

		<!-- Simplified to a direct projects grid -->
		<div class="projects-grid">
			{#each projects as project (project.id)}
				<div class="project-card">
					<img
						src={project.imageUrl}
						alt={project.title}
						class="project-image"
						on:error={(e) => {
							// Cast e.currentTarget to HTMLImageElement to access its properties
							const imgElement = e.currentTarget as HTMLImageElement;
							imgElement.onerror = null; // Prevent infinite loop if fallback also fails
							imgElement.src = 'https://placehold.co/800x450/44475a/f8f8f2?text=Image+Error';
						}}
					/>
					<div class="project-info">
						<h3 class="project-title">{project.title}</h3>
						<p class="project-description">{project.description}</p>
						<div class="project-links">
							{#if project.liveUrl}
								<a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="btn-link"
								>
									Live Demo
								</a>
							{/if}
							{#if project.githubUrl}
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									class="btn-link"
								>
									GitHub Repo
								</a>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
		<!-- Removed navigation arrows and pagination dots -->
	</div>
</div>

<style>
    .projects-section {
        background-color: var(--color-background-elevated); /* Alternating background */
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
        gap: var(--spacing-xl);
        width: 100%;
        max-width: 1200px;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: var(--spacing-lg);
        color: var(--color-primary);
    }

    .projects-intro {
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xxl);
        max-width: 700px;
        line-height: var(--line-height-base);
    }

    /* New grid styles for projects */
    .projects-grid {
        display: grid;
        /* Default to auto-fit, allowing more columns on very large screens */
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-xl); /* Gap between project cards */
        width: 100%;
        max-width: 1200px; /* Aligns with container */
        margin-top: var(--spacing-lg);
        justify-content: center; /* Center items if they don't fill the row */
        align-items: stretch; /* Make cards stretch to equal height */
    }

    .project-card {
        background-color: var(--color-background-main); /* Card background */
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-lg); /* More rounded corners */
        padding: var(--spacing-lg);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        height: 100%; /* Ensure cards fill grid cell height */
    }

    .project-card:hover {
        transform: translateY(-5px); /* Lift effect on hover */
        box-shadow: var(--shadow-lg); /* Enhanced shadow on hover */
    }

    .project-image {
        max-width: 100%;
        height: auto;
        border-radius: var(--border-radius-md);
        margin-bottom: var(--spacing-lg);
        box-shadow: var(--shadow-sm);
    }

    .project-info {
        flex-grow: 1; /* Allows info section to take available space */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Pushes links to the bottom */
        padding: 0 var(--spacing-sm); /* Add some horizontal padding */
    }

    .project-title {
        font-size: 2rem;
        color: var(--color-text-main);
        margin-bottom: var(--spacing-sm);
    }

    .project-description {
        font-size: 1rem;
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-lg);
        line-height: var(--line-height-base);
        flex-grow: 1; /* Allows description to take available space */
    }

    .project-links {
        display: flex;
        gap: var(--spacing-md);
        justify-content: center; /* Center the links */
        margin-top: auto; /* Push links to the bottom */
        width: 100%; /* Ensure links take full width for centering */
    }

    .btn-link {
        /* Inherits base `a` styles from app.css */
        background-color: var(--color-primary);
        color: var(--color-background-elevated);
        padding: var(--spacing-sm) var(--spacing-lg);
        border-radius: var(--border-radius-sm);
        transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
        text-decoration: none; /* Override default underline for button-like links */
        white-space: nowrap; /* Prevent text wrapping inside button */
        flex-shrink: 0; /* Prevent links from shrinking */
    }

    .btn-link:hover {
        background-color: var(--color-primary-accent);
        transform: translateY(-1px);
        box-shadow: var(--shadow-sm);
        text-decoration: none;
    }

    /* Removed all navigation arrows and pagination dot styles */

    /* Responsive adjustments */
    /* Force 1 column on medium screens (e.g., from 481px to 1024px) */
    @media (min-width: 481px) and (max-width: 1024px) {
        .projects-grid {
            grid-template-columns: 1fr; /* Force 1 column on medium screens */
            gap: var(--spacing-xl); /* Adjust gap for 1 column */
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }
        .projects-intro {
            font-size: 1rem;
            margin-bottom: var(--spacing-xl);
        }
        .projects-grid {
            /* This will now apply below 480px, ensuring it's 1 column even below 481px */
            grid-template-columns: 1fr; /* Ensures 1 column for smaller tablets/phones */
            gap: var(--spacing-lg);
        }
        .project-card {
            padding: var(--spacing-md);
        }
        .project-title {
            font-size: 1.75rem;
        }
        .project-description {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.8rem;
        }
        .projects-grid {
            grid-template-columns: 1fr; /* Single column on very small screens */
            gap: var(--spacing-md);
        }
        .project-card {
            padding: var(--spacing-sm);
        }
        .project-title {
            font-size: 1.5rem;
        }
        .project-description {
            font-size: 0.85rem;
        }
        .project-links {
            flex-direction: column; /* Stack buttons vertically on small screens */
            gap: var(--spacing-sm);
        }
        .btn-link {
            width: 100%; /* Make buttons full width */
        }
    }
</style>
