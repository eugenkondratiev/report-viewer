// import { useState } from 'react'
import './App.css'
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from 'HomePage';
import DayReportPage from './Pages/DayReport';
import MonthReportPage from './Pages/MonthReport';

function App() {
  // const [count, setCount] = useState(0)

  return (


    <Router>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Головна</Link>
            </li>
            <li>
              <Link to="/day">Добовий звіт</Link>
            </li>
            <li>
              <Link to="/month">Місячний звіт</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="day">
            <DayReportPage />
          </Route>
          <Route path="month">
            <MonthReportPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App
