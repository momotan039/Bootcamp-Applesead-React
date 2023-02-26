// import { useReducer, dispat, useContext } from "react"
// import { ThemeContext, UserContext } from "./App"

// export default function ButtonReducer() {
//     const user = useContext(UserContext)
//     const theme = useContext(ThemeContext)
//     const INCREAMENT = 'INCREAMENT'
//     const DECREAMENT = 'DECREAMENT'
//     const reducer = (state, action) => {
//         switch (action) {
//             case INCREAMENT:
//                 return state + 1
//             case DECREAMENT:
//                 return state - 1
//             default:
//                 return state
//         }
//     }
//     const [count, dispatch] = useReducer(reducer, 0)
//     return (
//         <div>
//             {/* <UserContext.Consumer>
//             {
//                 (user)=><ThemeContext.Consumer>
                    
//                     {
//                         (theme)=><>
//                             <h1>User:{user.name}</h1>
//                             <h1>Theme:{theme.color}</h1>
//                         </>
//                     }
//                 </ThemeContext.Consumer>
//             }
//         </UserContext.Consumer> */}
//             <h1>User:{user.name}</h1>
//             <h1>Theme:{theme.color}</h1>
//             <h1>Count:{count}</h1>
//             <button onClick={() => dispatch(INCREAMENT)}>count up</button>
//             <button onClick={() => dispatch(DECREAMENT)}>count down</button>
//         </div>
//     )
// }
