<script lang="ts">
    // First, let's define what a "Project" looks like.
    // Each project needs a unique ID, a title, a description, an image, and optional links.
    interface Project {
        id: number;
        title: string;
        description: string;
        imageUrl: string; // This will be the path to your project's image
        liveUrl?: string; // Optional link to a live demo of the project
        githubUrl?: string; // Optional link to the project's GitHub repository
    }

    // Now, we're setting up the structure for how your projects are categorized.
    // A 'ProjectCategory' can be either 'web' or 'game'.
    // Web projects will have 'subcategories' (like "Personal" and "Actual").
    // Game projects will just list their 'projects' directly.
    interface ProjectCategory {
        name: string;
        type: 'web' | 'game'; // This tells us if it's a web project or a game project
        subcategories?: ProjectSubcategory[]; // Web projects might have sub-sections
        projects?: Project[]; // Game projects (and eventually Actual Web Projects) will list projects here
    }

    // This interface is just for the subcategories within the 'Web Projects' section.
    interface ProjectSubcategory {
        name: string;
        projects: Project[]; // This will hold the actual projects in this sub-section
    }

    // Here's where all your projects are defined, neatly categorized!
    const categorizedProjects: ProjectCategory[] = [
        {
            name: 'Web Projects', // The main heading for all your web development work
            type: 'web',
            subcategories: [
                {
                    name: 'Personal Projects', // Projects you've worked on for yourself or learning
                    projects: [
                        {
                            id: 2,
                            title: 'Interactive Todo App',
                            description: 'A responsive todo application featuring drag-and-drop reordering and persistent storage, built with Svelte and local storage. A great example of a practical web tool!',
                            imageUrl: '/Imgs/todolist.png', // Migrated image URL
                            liveUrl: 'https://todo-list-sepia-iota.vercel.app/', // Migrated live URL
                            githubUrl: 'https://github.com/abdalkreem15/todo-list' // Migrated GitHub URL
                        },
                        {
                            id: 3,
                            title: 'Clock app',
                            description: 'A basic clock application for web browsers, demonstrating fundamental JavaScript logic and clean UI design. It shows how simple ideas can come to life on the web.',
                            imageUrl: '/Imgs/clock.png', // Migrated image URL
                            liveUrl: 'https://clock-app-five-kappa.vercel.app/', // Migrated live URL
                            githubUrl: 'https://github.com/abdalkreem15/Clock-app' // Migrated GitHub URL
                        }
                    ]
                },
                {
                    name: 'Actual Projects', // This section is for real-world projects you've done for clients or teams
                    projects: [] // Currently empty, but ready for when you add your professional work!
                }
            ]
        },
        {
            name: 'Game Projects', // The main heading for your game development work
            type: 'game',
            projects: [
                {
                    id: 1,
                    title: 'Larry\'s Adventure (beta)',
                    description: 'this is a simple platformer game I am working on using the Godot Game Engine, the beta version is out on itch.io',
                    imageUrl: '/Imgs/Larry.png',
                    liveUrl: 'https://desert-coder.itch.io/larrys-adventure-beta',
                }
            ]
        }
    ];
</script>

<div class="projects-section">
    <div class="container">
        <h2>My Projects</h2>
        <p class="projects-intro">
            Here's a selection of my work, demonstrating my frontend web development and game development skills.
        </p>

        <!-- We loop through our main categories first (like "Web Projects" and "Game Projects"). -->
        {#each categorizedProjects as category (category.name)}
            <section class="project-category-section">
                <!-- This is the main heading for each category (e.g., "Web Projects"). -->
                <h3 class="category-heading">{category.name}</h3>

                <!-- Now, we check if this is a "Web Project" category and if it has subcategories. -->
                {#if category.type === 'web' && category.subcategories}
                    <!-- If it's a web project with subcategories, we loop through them (e.g., "Personal Projects", "Actual Projects"). -->
                    {#each category.subcategories as subcategory (subcategory.name)}
                        <div class="project-subcategory">
                            <!-- This is the heading for each subcategory (e.g., "Personal Projects"). -->
                            <h4 class="subcategory-heading">{subcategory.name}</h4>
                            <!-- We check if there are any projects in this subcategory to display. -->
                            {#if subcategory.projects.length > 0}
                                <!-- If there are projects, we display them in a grid. -->
                                <div class="projects-grid">
                                    <!-- Loop through each project within the current subcategory. -->
                                    {#each subcategory.projects as project (project.id)}
                                        <div class="project-card">
                                            <!-- The project's image, with a fallback if it doesn't load. -->
                                            <img
                                                src="{project.imageUrl}"
                                                alt="{project.title}"
                                                class="project-image"
                                                on:error={(e) => {
                                                    const imgElement = e.currentTarget as HTMLImageElement;
                                                    imgElement.onerror = null; // Important to prevent endless error loops
                                                    imgElement.src = 'https://placehold.co/800x450/44475a/f8f8f2?text=Image+Error'; // Fallback placeholder
                                                }}
                                            />
                                            <div class="project-info">
                                                <!-- Project title, description, and links. -->
                                                <h5 class="project-title">{project.title}</h5>
                                                <p class="project-description">{project.description}</p>
                                                <div class="project-links">
                                                    <!-- Show "Live Demo" button only if a URL is provided. -->
                                                    {#if project.liveUrl}
                                                        <a href="{project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-link">
                                                            Live Demo
                                                        </a>
                                                    {/if}
                                                    <!-- Show "GitHub Repo" button only if a URL is provided. -->
                                                    {#if project.githubUrl}
                                                        <a href="{project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-link">
                                                            GitHub Repo
                                                        </a>
                                                    {/if}
                                                </div>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            {:else}
                                <!-- If a subcategory (like "Actual Projects") is empty, we display a friendly message. -->
                                <p class="empty-section-message">This section is currently empty, but exciting new projects are on the horizon!</p>
                            {/if}
                        </div>
                    {/each}
                <!-- If it's a "Game Project" category, we display projects directly under it. -->
                {:else if category.type === 'game' && category.projects}
                    <div class="projects-grid">
                        <!-- Loop through each game project. -->
                        {#each category.projects as project (project.id)}
                            <div class="project-card">
                                <!-- Same project card structure as above. -->
                                <img
                                    src="{project.imageUrl}"
                                    alt="{project.title}"
                                    class="project-image"
                                    on:error={(e) => {
                                        const imgElement = e.currentTarget as HTMLImageElement;
                                        imgElement.onerror = null;
                                        imgElement.src = 'https://placehold.co/800x450/44475a/f8f8f2?text=Image+Error';
                                    }}
                                />
                                <div class="project-info">
                                    <h5 class="project-title">{project.title}</h5>
                                    <p class="project-description">{project.description}</p>
                                    <div class="project-links">
                                        {#if project.liveUrl}
                                            <a href="{project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-link">
                                                Get The Game
                                            </a>
                                        {/if}
                                        {#if project.githubUrl}
                                            <a href="{project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-link">
                                                GitHub Repo
                                            </a>
                                        {/if}
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}
            </section>
        {/each}
    </div>
</div>

<style>
    /* Styling for the main "Projects" section container. */
    .projects-section {
        background-color: var(--color-background-elevated); /* An alternating background color */
        color: var(--color-text-main); /* Main text color */
        padding: var(--spacing-xxl) var(--spacing-md); /* Generous padding all around */
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* Ensures it takes up at least the full screen height */
    }

    /* Standard container for centering and limiting content width. */
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-xl); /* Space between major sections within the container */
        width: 100%;
        max-width: 1200px;
    }

    /* Main "My Projects" heading. */
    h2 {
        font-size: 2.5rem;
        margin-bottom: var(--spacing-lg);
        color: var(--color-primary); /* Your primary accent color */
    }

    /* Introductory text for the projects section. */
    .projects-intro {
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xxl); /* More space before the project categories start */
        max-width: 700px;
        line-height: var(--line-height-base);
    }

    /* Styling for the main project category sections (e.g., "Web Projects", "Game Projects"). */
    .project-category-section {
        width: 100%;
        margin-bottom: var(--spacing-xxl); /* Creates space between main categories */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Heading for each main project category (e.g., "Web Projects"). */
    .category-heading {
        font-size: 2.2rem; /* Larger and more prominent */
        color: var(--color-primary-accent); /* A secondary accent color */
        margin-bottom: var(--spacing-xl);
        padding-bottom: var(--spacing-sm);
        border-bottom: 2px solid var(--color-border); /* A subtle line underneath */
        width: 100%;
        max-width: 700px; /* Limits the width of the heading line */
        text-align: center;
    }

    /* Container for subcategories (e.g., "Personal Projects", "Actual Projects"). */
    .project-subcategory {
        width: 100%;
        margin-top: var(--spacing-xxl); /* Creates space between subcategories */
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* Heading for each subcategory (e.g., "Personal Projects"). */
    .subcategory-heading {
        font-size: 1.8rem; /* Slightly smaller than main categories */
        color: var(--color-text-main);
        margin-bottom: var(--spacing-lg);
        padding-bottom: var(--spacing-xs);
        border-bottom: 1px dashed var(--color-border); /* A dashed line for sub-sections */
        width: 100%;
        max-width: 600px; /* Limits the width of the heading line */
        text-align: center;
    }

    /* Styling for the message displayed when a section is empty. */
    .empty-section-message {
        font-size: 1rem;
        color: var(--color-text-secondary);
        padding: var(--spacing-md);
        border: 1px dashed var(--color-border);
        border-radius: var(--border-radius-md);
        margin-top: var(--spacing-lg);
        max-width: 500px;
        width: 100%;
    }

    /* The main grid layout for displaying project cards. */
    .projects-grid {
        display: grid;
        /* Default for larger screens: strictly 2 columns */
        grid-template-columns: 1fr 1fr; /* This enforces exactly 2 columns on desktop */
        gap: var(--spacing-xl); /* Space between individual project cards */
        width: 100%;
        max-width: 1200px; /* This max-width applies to the whole grid container */
        margin-top: var(--spacing-lg);
        justify-content: center; /* Centers cards if they don't fill a whole row */
        align-items: stretch; /* Makes all cards in a row the same height */
    }
    /* Styling for each individual project card. */
    .project-card {
        background-color: var(--color-background-main); /* Card's background color */
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-lg); /* Nice rounded corners for cards */
        padding: var(--spacing-lg);
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        box-shadow: var(--shadow-md); /* A subtle shadow for depth */
        transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth animations on hover */
        height: 100%; /* Ensures the card stretches to fill its grid cell's height */
    }

    /* What happens when you hover over a project card. */
    .project-card:hover {
        transform: translateY(-5px); /* Makes the card lift up slightly */
        box-shadow: var(--shadow-lg); /* Makes the shadow more prominent */
    }

    /* Styling for the project image within the card. */
    .project-image {
        max-width: 100%;
        height: auto;
        border-radius: var(--border-radius-md);
        margin-bottom: var(--spacing-lg);
        box-shadow: var(--shadow-sm);
    }

    /* Container for the project's text info and links. */
    .project-info {
        flex-grow: 1; /* Allows this section to take up available vertical space */
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* Pushes the links to the bottom of the card */
        padding: 0 var(--spacing-sm); /* Adds some side padding */
    }

    /* Styling for the project title. */
    .project-title {
        font-size: 2rem;
        color: var(--color-text-main);
        margin-bottom: var(--spacing-sm);
    }

    /* Styling for the project description. */
    .project-description {
        font-size: 1rem;
        color: var(--color-text-secondary);
        margin-bottom: var(--spacing-lg);
        line-height: var(--line-height-base);
        flex-grow: 1; /* Allows the description to expand and push links down */
    }

    /* Container for the "Live Demo" and "GitHub Repo" buttons. */
    .project-links {
        display: flex;
        gap: var(--spacing-md);
        justify-content: center; /* Centers the buttons */
        margin-top: auto; /* Pushes the links to the very bottom of the info section */
        width: 100%; /* Ensures links take full width for centering */
    }

    /* Styling for the project link buttons. */
    .btn-link {
        /* These inherit general button styles from your app.css */
        background-color: var(--color-primary);
        color: var(--color-background-elevated); /* Text color for the button */
        padding: var(--spacing-sm) var(--spacing-lg);
        border-radius: var(--border-radius-sm);
        transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
        text-decoration: none; /* Removes the default underline from links */
        white-space: nowrap; /* Prevents button text from wrapping */
        flex-shrink: 0; /* Prevents buttons from shrinking on small screens */
    }

    /* What happens when you hover over a project link button. */
    .btn-link:hover {
        background-color: var(--color-primary-accent);
        transform: translateY(-1px);
        box-shadow: var(--shadow-sm);
        text-decoration: none;
    }

    /* --- Responsive Adjustments for Different Screen Sizes --- */

    /* For medium screens (e.g., larger tablets and small laptops: from 481px to 1024px wide) */
    @media (min-width: 481px) and (max-width: 1024px) {
        .projects-grid {
            grid-template-columns: 1fr; /* On these screens, force a single column layout */
            gap: var(--spacing-xl); /* Adjust the gap for a single column */
        }
    }

    /* For smaller tablets and large phones (up to 768px wide) */
    @media (max-width: 768px) {
        h2 {
            font-size: 2rem; /* Smaller main heading */
        }
        .projects-intro {
            font-size: 1rem;
            margin-bottom: var(--spacing-xl);
        }
        .project-category-section {
            margin-bottom: var(--spacing-xl); /* Less space between categories on smaller screens */
        }
        .category-heading {
            font-size: 1.8rem;
            margin-bottom: var(--spacing-lg);
        }
        .project-subcategory {
            margin-top: var(--spacing-lg);
        }
        .subcategory-heading {
            font-size: 1.5rem;
            margin-bottom: var(--spacing-md);
        }
        .projects-grid {
            grid-template-columns: 1fr; /* Ensures a single column for tablets/phones */
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

    /* For very narrow mobile devices (up to 480px wide) */
    @media (max-width: 480px) {
        h2 {
            font-size: 1.8rem;
        }
        .projects-grid {
            grid-template-columns: 1fr; /* Still a single column */
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
            flex-direction: column; /* Stacks the buttons vertically */
            gap: var(--spacing-sm);
        }
        .btn-link {
            width: 100%; /* Makes buttons fill the width on tiny screens */
        }
    }
</style>
