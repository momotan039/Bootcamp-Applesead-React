export const Books = () => {
    const urlApi='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=nNAneMM7JgClj6NfL9hmR8smXQFDp5YR'
    const data=useFetch(urlApi)
    return (
        <div className="books">
        <h1>Books</h1>
            {
                data&&data.result.books.map((d,i)=>{
                    return <div key={i} className="book">
                    <h3>{d.title}</h3>
                 </div>
                })
            }
        </div>
      )

}
