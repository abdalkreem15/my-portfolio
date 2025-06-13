<!-- src/lib/components/Contact.svelte -->
<script lang="ts">
	const contactInfo = {
		email: 'kimokafoury@gmail.com',
		phone: '+20 100 471 6157'
	};

	const socialLinks = [
		{
			name: 'GitHub',
			url: 'https://github.com/abdalkreem15',
			iconSvgPath:
				'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.11 0-.258 0-.577v-2.222c-3.322.723-4.026-1.571-4.026-1.571-.54-.571-1.314-1.444-.093-1.428.113.008 1.406.49 2.146 1.157.64.606 1.405.908 2.302.908 0-.294.015-.53.155-.747-2.736-.31-5.61-1.363-5.61-6.046 0-1.334.475-2.427 1.25-3.278-.12-.31-.54-1.55 0-3.238 0 0 1.018-.328 3.33.626.96-.266 1.98-.399 3-.399s2.04.133 3 .399c2.312-.954 3.33-.626 3.33-.626.54 1.688.12 2.928 0 3.238.775.85 1.25 1.944 1.25 3.278 0 4.693-2.877 5.735-5.62 6.038.163.14.31.408.31.815v2.857c0 .319-.192.688 0 .577c4.766-1.587 8.203-6.085 8.203-11.387c0-6.627-5.372-12-12-12z',
			iconViewBox: '0 0 24 24'
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/abdalkareem.kafoury/',
			iconSvgPath:
				'M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.243-1.333 1.153-1.333h2.847v-5h-3.998c-4.145 0-5.002 3.001-5.002 4.987v2.013z',
			iconViewBox: '0 0 24 24'
		}
		// Add more social media links here as needed
	];

	let copyMessage = $state(''); // Reactive state for the copy feedback message
    let messageTimer: ReturnType<typeof setTimeout>; // Timer for hiding the message
    let feedbackKey = $state(0); // Add a key to force re-render for animation

    /**
     * Copies text to clipboard and displays a feedback message.
     * @param textToCopy The string to copy to the clipboard.
     * @param message The message to display (e.g., "Email Copied!").
     */
    function copyToClipboard(textToCopy: string, message: string) {
        // Clear any existing timer to prevent overlapping messages
        clearTimeout(messageTimer);
        copyMessage = ''; // Clear message first to ensure re-render for new message
        feedbackKey++; // Increment key to force re-render of feedback div

        try {
            // Create a temporary textarea element to copy text
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed'; // Prevent scrolling to bottom of page
            textarea.style.opacity = '0'; // Hide the textarea
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            document.execCommand('copy'); // Execute copy command
            document.body.removeChild(textarea); // Remove the textarea

            copyMessage = message; // Set the success message
        } catch (err) {
            console.error('Failed to copy text: ', err);
            copyMessage = 'Failed to copy!'; // Set a failure message
        } finally {
            // Hide the message after 2 seconds
            messageTimer = setTimeout(() => {
                copyMessage = '';
            }, 1300);
        }
    }
</script>

<div class="contact-section">
    <div class="container">
        <h2>Let's Connect!</h2>
        <p class="contact-intro">
            Feel free to reach out via email or phone, or connect with me on social media.
        </p>

        <div class="contact-details-grid">
            <!-- Email Contact - now copies to clipboard -->
            <div class="contact-item">
                <!-- Use a button or a div with role="button" for clickability if not navigating -->
                <button
                    class="icon-link"
                    onclick={() => copyToClipboard(contactInfo.email, 'Email Copied!')}
                    aria-label="Copy Email Address"
                >
                    <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span class="hover-bubble">Email: {contactInfo.email}</span>
                </button>
            </div>

            <!-- Phone Contact - now copies to clipboard -->
            <div class="contact-item">
                <button
                    class="icon-link"
                    onclick={() => copyToClipboard(contactInfo.phone, 'Phone Number Copied!')}
                    aria-label="Copy Phone Number"
                >
                    <!-- Corrected SVG for a filled phone icon to match the provided image -->
                    <svg class="contact-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1C12.43 23 2 12.57 2 6c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.24.2 2.45.57 3.57c.12.35.03.75-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span class="hover-bubble">Call: {contactInfo.phone}</span>
                </button>
            </div>
        </div>

        <!-- Copy feedback message -->
        {#if copyMessage}
            {#key feedbackKey} <!-- This forces re-render and re-animation -->
                <div class="copy-feedback-message">
                    {copyMessage}
                </div>
            {/key}
        {/if}

        <div class="social-links">
            {#each socialLinks as link (link.name)}
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} class="social-icon-link">
                    <svg class="social-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" {...link.iconViewBox && { viewBox: link.iconViewBox }} fill="currentColor">
                        <path d="{link.iconSvgPath}" />
                    </svg>
                </a>
            {/each}
        </div>
    </div>
</div>

<style>
    .contact-section {
        background-color: var(--color-background-main); /* Alternating background */
        color: var(--color-text-main);
        padding: var(--spacing-xxl) var(--spacing-md);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        position: relative; /* For positioning copy feedback message */
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--spacing-xl);
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: var(--spacing-lg);
        color: var(--color-primary);
    }

    .contact-intro {
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xxl);
        max-width: 700px;
        line-height: var(--line-height-base);
    }

    .contact-details-grid {
        display: flex; /* Use flexbox for contact items */
        gap: var(--spacing-xxl); /* Space between email and phone icons */
        justify-content: center;
        align-items: center;
        margin-bottom: var(--spacing-xxl); /* Space before social links */
        flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    }

    .contact-item {
        position: relative; /* For the hover bubble positioning */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px; /* Size of the clickable area for icons */
        height: 80px;
        border-radius: var(--border-radius-md);
        background-color: var(--color-background-elevated);
        box-shadow: var(--shadow-sm);
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        color: var(--color-primary-accent); /* Icon color */
        position: relative; /* For bubble positioning */
        border: none; /* Remove button default border */
        cursor: pointer; /* Indicate it's clickable */
    }

    .icon-link:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
        background-color: rgba(97, 218, 251, 0.1); /* Slight highlight on hover */
    }

    .contact-icon {
        width: 48px; /* Icon size */
        height: 48px;
    }

    /* Hover Bubble Styles */
    .hover-bubble {
        position: absolute;
        bottom: 100%; /* Position above the icon */
        left: 50%;
        transform: translateX(-50%) translateY(-10px); /* Adjust vertical position */
        background-color: var(--color-background-elevated);
        color: var(--color-text-main);
        padding: var(--spacing-xs) var(--spacing-sm);
        border-radius: var(--border-radius-sm);
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
        pointer-events: none; /* Allows clicks through the bubble */
        z-index: 10; /* Ensure bubble is above other content */
        box-shadow: var(--shadow-sm);
        border: 1px solid var(--color-border);
    }

    .icon-link:hover .hover-bubble {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(-20px); /* Move up slightly on hover */
    }

    /* Copy Feedback Message Styles */
    .copy-feedback-message {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--color-primary);
        color: var(--color-background-elevated);
        padding: var(--spacing-sm) var(--spacing-lg);
        border-radius: var(--border-radius-md);
        font-weight: 600;
        z-index: 100; /* Ensure it's on top */
        animation: fadeOut 2.5s forwards; /* Animation to fade out */
    }

    @keyframes fadeOut {
        0% { opacity: 1; }
        80% { opacity: 1; }
        100% { opacity: 0; }
    }

    /* Social Links Section */
    .social-links {
        display: flex;
        gap: var(--spacing-xl); /* Space between social icons */
        justify-content: center;
        align-items: center;
        flex-wrap: wrap; /* Allow items to wrap on smaller screens */
    }

    .social-icon-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px; /* Size of social icons */
        height: 60px;
        border-radius: 50%; /* Make them round */
        background-color: var(--color-background-elevated);
        box-shadow: var(--shadow-sm);
        transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        color: var(--color-primary-accent); /* Icon color */
    }

    .social-icon-link:hover {
        transform: translateY(-3px);
        box-shadow: var(--shadow-md);
        background-color: rgba(97, 218, 251, 0.1); /* Slight highlight on hover */
    }

    .social-icon {
        width: 32px; /* Inner SVG icon size */
        height: 32px;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        h2 {
            font-size: 2rem;
        }
        .contact-intro {
            font-size: 1rem;
            margin-bottom: var(--spacing-xl);
        }
        .contact-details-grid {
            gap: var(--spacing-lg);
            margin-bottom: var(--spacing-xl);
        }
        .icon-link {
            width: 70px;
            height: 70px;
        }
        .contact-icon {
            width: 40px;
            height: 40px;
        }
        .social-links {
            gap: var(--spacing-lg);
        }
        .social-icon-link {
            width: 50px;
            height: 50px;
        }
        .social-icon {
            width: 28px;
            height: 28px;
        }
    }

    @media (max-width: 480px) {
        h2 {
            font-size: 1.8rem;
        }
        .contact-details-grid {
            flex-direction: column; /* Stack vertically on very small screens */
        }
        .icon-link {
            width: 60px;
            height: 60px;
        }
        .contact-icon {
            width: 36px;
            height: 36px;
        }
        .social-icon-link {
            width: 45px;
            height: 45px;
        }
        .social-icon {
            width: 24px;
            height: 24px;
        }
        .copy-feedback-message {
            padding: var(--spacing-xs) var(--spacing-md);
            font-size: 0.9rem;
        }
    }
</style>
