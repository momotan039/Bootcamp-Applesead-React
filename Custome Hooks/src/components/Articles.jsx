import { useEffect, useState } from "react"
import { useFetch } from "./useFetch"

export const Articles = () => {
    const urlApi='https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=nNAneMM7JgClj6NfL9hmR8smXQFDp5YR'
    const data=useFetch(urlApi)
  return (
    <div className="articles">
    <h1>Articles</h1>
        {
            data&&data.response.docs.map((d,i)=>{
                return <div key={i} className="article">
                <h3>{d.abstract}</h3>
             </div>
            })
        }
    </div>
  )
}
