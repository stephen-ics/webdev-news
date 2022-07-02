import React from 'react'
import {useRouter} from 'next/router'

const article = ({ article }) => {

  return (
    <>
        <h1>{article.id}</h1>
        <p>{article.body}</p>
        <div>dsds</div>
    </>
  )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/
        ${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export default article