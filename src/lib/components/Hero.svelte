<div class="hero-section">
    <div class="container">
        <h1>Hi, I'm Abdalkareem</h1>
        <p class="tagline">Frontend Developer | Game Developer | Crafting engaging web experiences.</p>
        <p class="description">
            Passionate about building intuitive and high-performance user interfaces.
            I transform ideas into responsive and beautiful web applications, including interactive games.
        </p>
        <button
            onclick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >View My Work</button
        >
    </div>
</div>

<style>
    .hero-section {
        min-height: 100vh; /* Make it fill the viewport height */
        display: flex;
        flex-direction: column; /* Stack content vertically */
        align-items: center; /* Horizontally center content */
        justify-content: center; /* Vertically center content */
        text-align: center;
        background-color: var(--color-background-main); /* Uses global dark mode variable */
        color: var(--color-text-main); /* Uses global dark mode variable */
        /* Adjust padding-top to account for the fixed Navbar */
        padding-top: var(--spacing-xxl); /* Start below the navbar, use global spacing */
        padding-bottom: var(--spacing-xxl); /* Add padding to the bottom too */
    }

    .container {
        /* Uses global .container styles for max-width and horizontal padding */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-md); /* Space out elements */
    }

    h1 {
        font-size: 3.8rem; /* Larger for impact */
        margin-bottom: var(--spacing-sm);
        color: var(--color-primary); /* Use primary accent color */
        line-height: 1.1;
        overflow-wrap: break-word; /* Ensure long words break */
    }

    .tagline {
        font-family: var(--font-family-heading); /* Use heading font for emphasis */
        font-size: 1.8rem; /* Slightly larger tagline */
        font-weight: 600;
        margin-bottom: var(--spacing-md);
        color: var(--color-text-main); /* Uses global dark mode variable */
        overflow-wrap: break-word; /* Ensure long words break */
    }

    .description {
        font-size: 1.1rem;
        max-width: 700px; /* Constrain width for readability */
        margin: 0 auto var(--spacing-lg); /* Center and add bottom margin */
        color: var(--color-text-secondary); /* Uses global dark mode variable */
        overflow-wrap: break-word; /* Ensure long words break */
    }

    button {
        /* Inherits base button styles from app.css */
        font-size: 1.1rem;
        padding: var(--spacing-md) var(--spacing-lg);
        border-radius: var(--border-radius-md); /* Slightly more rounded */
        box-shadow: var(--shadow-sm); /* Subtle shadow */
    }

    button:hover {
        box-shadow: var(--shadow-md); /* More prominent shadow on hover */
        transform: translateY(-2px); /* Enhanced lift effect */
    }

    /* Responsive adjustments for smaller screens */
    @media (max-width: 768px) {
        h1 {
            font-size: 3rem; /* Adjust heading size */
        }
        .tagline {
            font-size: 1.5rem;
        }
        .description {
            font-size: 1rem;
            max-width: 90%;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 2.2rem; /* Further reduced for smaller screens */
        }
        .tagline {
            font-size: 1.1rem; /* Further reduced for smaller screens */
        }
    }

    /* Even smaller breakpoint for very narrow mobile devices */
    @media (max-width: 375px) {
        h1 {
            font-size: 1.8rem; /* Significant reduction for tiny screens */
        }
        .tagline {
            font-size: 0.9rem; /* Smallest comfortable size */
        }
        .description {
            font-size: 0.85rem;
        }
    }
</style>
