const fatchRepo = async (name) => {
    const response = await fetch(`https://api.github.com/repos/${process.env.GIT_USER_NAME}/${name}`,
        {
            next: {
                revalidate: 60
            }
        }) // added the next revalidator to check for the new data, as fetch always cach the returned data we need to revalidate 
    const repo = await response.json()
    return repo;
}
import React from 'react'
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

const Repo = async ({ name }) => {
    const repo = await fatchRepo(name)
    return (
        <div>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className="card-stats">
                <div className="card-stat">
                    <FaStar /> {repo.stargazers_count}
                </div>
                <div className="card-stat">
                    <FaCodeBranch /> {repo.forks_count}
                </div>
                <div className="card-stat">
                    <FaEye /> {repo.watchers_count}
                </div>
            </div>
        </div>
    )
}

export default Repo