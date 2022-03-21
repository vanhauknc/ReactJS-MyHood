import {useStore,actions} from './store'

function App() {
  const [state,dispatch] = useStore()
  const {todos,todoInput} = state;

  const onSubmit = () =>{
    dispatch(actions.addTodo(todoInput))
  }
  return (
    <div className="App">
        <input value={todoInput} 
        placeholder='Enter todo...'
        onChange={e =>{
          dispatch(actions.setTodoInput(e.target.value))
        }}
        >
        
        </input>
        <button onClick={onSubmit}>Submit</button>
        <ul>
          {todos.map((todo : string,index : number)=>{
            return (<li key={index}>{todo}</li>)
          })}
        </ul>
    </div>
  );
}

export default App;
