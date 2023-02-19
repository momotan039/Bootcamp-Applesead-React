import Article from "./article"

function Articles(props){

    return(
        <div className="articles">
            {
                props.articles.map(ar=>{
                  return  <Article article={ar} key={ar.id} />
                })
            }
        </div>
    )
}

export default Articles