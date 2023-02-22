import Todo from "./Todo"

export default function Tasks({tasks,deleteTodo,updateTodo}){
return <div className="tasks">
{
    tasks.map((t, i) => {
        return <Todo task={t} key={i} 
             deleteMe={()=>deleteTodo(t)}
             changeMe={()=>updateTodo(t)}
             />
    })
}
</div>
}
