<div class="about-section">
    <div class="container">
        <h2>About Me</h2>
        <p class="intro-text">
            Hi there! I'm Abdalkareem, a high school student living in the vibrant city of Tanta, Egypt.
        </p>
        <p class="description-text">
            My journey into the world of technology began with a deep love for reading. I enjoy immersing
            myself in stories and knowledge, which eventually led me to discover another captivating
            world: <strong><i>coding</i></strong>.
        </p>
        <p class="description-text">
            I spend a good part of my free time delving into code, constantly learning and building. My
            aspiration is to become a skilled <strong><i>Frontend</i></strong> Developer, transforming creative ideas into
            intuitive, beautiful, and highly functional web experiences, and <strong><i>Game Developer</i></strong>, where I bring interactive worlds to life. I'm excited to keep exploring,
            learning, and contributing to the digital landscape!
        </p>
        <div class="contact-prompt">
            <p>Want to connect or discuss a project?</p>
            <button
                onclick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
                Get In Touch
            </button>
        </div>
    </div>
</div>

<style>
    .about-section {
        /* These styles are mostly handled by the global section styles in +page.svelte */
        /* and the container utility class from app.css */
        background-color: var(--color-background-elevated); /* Using defined dark mode variable */
        color: var(--color-text-main); /* Using defined dark mode variable */
        padding: var(--spacing-xxl) var(--spacing-md); /* Consistent padding */
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh; /* Ensures it takes full viewport height */
    }

    .container {
        /* Inherits max-width and responsive padding from global .container utility */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-md); /* Space between paragraphs and elements */
    }

    h2 {
        font-size: 2.5rem; /* Larger for section title */
        margin-bottom: var(--spacing-lg);
        color: var(--color-primary); /* Primary color for emphasis */
    }

    .intro-text {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: var(--spacing-sm);
        max-width: 800px;
        line-height: var(--line-height-base);
    }

    .description-text {
        font-size: 1rem;
        margin-bottom: var(--spacing-sm);
        max-width: 800px;
        line-height: var(--line-height-base);
        color: var(--color-text-main); /* Ensure consistent text color */
    }

    .description-text:last-of-type {
        margin-bottom: var(--spacing-lg); /* More space before the button */
    }

    .contact-prompt {
        margin-top: var(--spacing-xl);
        padding: var(--spacing-md);
        border: 1px solid var(--color-border);
        border-radius: var(--border-radius-md);
        background-color: rgba(0, 0, 0, 0.2); /* Slightly darker background for the prompt */
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-sm);
        max-width: 500px;
        width: 100%;
    }

    .contact-prompt p {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 0;
        color: var(--color-text-main);
    }

    button {
        /* Inherits base button styles from app.css */
        font-size: 1rem;
        padding: var(--spacing-sm) var(--spacing-lg);
        border-radius: var(--border-radius-md);
        box-shadow: var(--shadow-sm);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }
        .intro-text {
            font-size: 1.1rem;
        }
        .description-text {
            font-size: 0.95rem;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.8rem;
        }
        .intro-text {
            font-size: 1rem;
        }
        .description-text {
            font-size: 0.9rem;
        }
        .contact-prompt {
            padding: var(--spacing-sm);
        }
    }
</style>