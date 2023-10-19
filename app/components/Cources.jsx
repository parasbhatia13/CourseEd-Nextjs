"use client"
import Link from "next/link"
// const getCources = async () => {
//     const response = await fetch('http://localhost:3000/api/cources')
//     const cources = response.json()
//     return cources;
// }
const Cources = ({ courceList }) => {
    // const courceList = await getCources()
    return (
        <div className="cources">
            {courceList.map((cource) => (
                <div className="card" key={cource.id}>
                    <h2>{cource.title}</h2>
                    <small>Level: {cource.level}</small>
                    <p>{cource.description}</p>
                    <Link href={cource.link} target="_blank" className="btn">Go to cource</Link>
                </div>
            ))}
        </div>
    )
}

export default Cources