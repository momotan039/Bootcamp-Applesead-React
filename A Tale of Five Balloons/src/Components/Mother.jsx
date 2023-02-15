import Child from "./Child"

function Mother() {
    const kids = [
        { name: 'Ori', color: 'red' },
        { name: 'Ron', color: 'blue' },
        { name: 'Sigalit', color: 'green' },
        { name: 'Ruti', color: 'yellow' },
        { name: 'Alon', color: 'purple' },
    ]
    return (
       <>
       <h1>A Tale of Five Balloons</h1>
        <div className="flex">
            {kids.map((k,i)=>{
              return  <Child kid={k} key={i} />
            })}
        </div>
       </>
    )
}

export default Mother