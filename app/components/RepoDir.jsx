const getRepoContents = async (name) => {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Adding a 3-second delay (just for demonstration)

    // Fetch the repository contents from GitHub's API
    const response = await fetch(`https://api.github.com/repos/${process.env.GIT_USER_NAME}/${name}/contents`, {
        // Define revalidation settings
        next: {
            revalidate: 60
        }
    });

    const contents = await response.json(); // Parse the response as JSON
    return contents; // Return the contents
}

import Link from 'next/link';

// RepoDirs component for displaying repository directories
const RepoDirs = async ({ name }) => {
    const contents = await getRepoContents(name); // Get repository contents
    const dirs = contents.filter((content) => content.type === 'dir'); // Filter for directory contents

    return (
        <>
            <h3>Directories</h3>
            <ul>
                {
                    dirs.map((dir) => (
                        <li key={dir.path}>
                            <Link href={dir.html_url} target='_blank'>
                                {dir.path}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    );
}

export default RepoDirs; // Export the RepoDirs component
