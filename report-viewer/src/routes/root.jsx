
import { Outlet, Link } from "react-router-dom";
export default function Root() {
    return (

        <>
            <header>
                <div className="nav-wrapper">

                    <nav>
                        <ul>
                            {/* <li>
                                <Link to="/">Головна</Link>

                            </li> */}
                            <li>
                                <Link to="/home">Домашня</Link>

                            </li>
                            <li>
                                <Link to="/day">Добовий звіт</Link>
                            </li>
                            <li>
                                <Link to="/month">Місячний звіт</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )

}