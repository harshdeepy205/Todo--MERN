import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { TodoList } from './TodoList'
import { CreateTodo } from './CreateTodo'
import { EditTodo } from './EditTodo'

function App() {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg navbar-dark bgcolor ">
        <ul className="navbar-nav mx-auto order 0 ">
          <li className="navbar-item">
            <Link to="/" className="nav-link "><button className="buttons">Todos</button></Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link"><button className="buttons">Create Todo</button></Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Switch>
    </div>
  );
}

export default App;
