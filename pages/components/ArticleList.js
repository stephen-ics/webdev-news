import articleStyles from '/styles/Articles.module.css'
import ArticleItem from './ArticleItem'
import React from 'react'

const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid}>
        {articles.map((article) => (
        <ArticleItem article={article} />
    ))}
    </div>
  )
}

export default ArticleList