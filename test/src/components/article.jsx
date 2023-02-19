function Article(props){

    return(
        <div className="article">
            <h3>{props.article.title}</h3>
            <h4>{props.article.author}</h4>
            <h4>{props.article.date}</h4>
        </div>
    )
}

export default Article