import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Articles from './components/Articles';
import AddArticle from './components/AddArticle';

function App() {

  const _articles = [
    { id: 1, title: 'React Props Tutorial', author: 'John Doe', date: '2022-02-15' },
    { id: 2, title: '10 Tips for Writing Clean Code', author: 'Jane Smith', date: '2022-02-14' },
    { id: 3, title: 'The Benefits of Pair Programming', author: 'Bob Johnson', date: '2022-02-13' },
  ];
  
  const [articles,setArticles]=useState(_articles)

  const addArticle=(article)=>{
    article['id']=articles.length+1
    setArticles([...articles,article])
  }

  return (
    <div className="App">
      <>
      <h1>Aricles App</h1>
        <Articles articles={articles}/>
        <AddArticle addArticle={addArticle}/>
      </>
    </div>
  )
}

export default App
