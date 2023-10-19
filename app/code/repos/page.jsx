import Link from 'next/link'
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"
const fectchRepos = async () => {
    const response = await fetch(`https://api.github.com/users/${process.env.GIT_USER_NAME}/repos`,
        {
            next: {
                revalidate: 60
            }
        }) // from traversy media brd // url for mine is https://api.github.com/users/parasbhatia13/repos
    // to show the spinner for 1 sec
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const repos = response.json()
    return repos
}
import React from 'react'
import { resolve } from 'styled-jsx/css'

const ReposPage = async () => {
    const repos = await fectchRepos()
    return (
        <div className="repos-container">
            <h2>Repositories</h2>
            <ul className="repo-list">
                {
                    repos.map((repo) => (
                        <li key={repo.id}>
                            <Link href={`/code/repos/${repo.name}`}>
                                <h3>{repo.name}</h3>
                                <p>{repo.description}</p>
                                <div className="repo-details">
                                    <span>
                                        <FaStar /> {repo.stargazers_count}
                                    </span>
                                    <span>
                                        <FaCodeBranch /> {repo.forks_count}
                                    </span>
                                    <span>
                                        <FaEye /> {repo.watchers_count}
                                    </span>
                                </div>
                            </Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default ReposPage