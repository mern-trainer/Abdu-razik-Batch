import { Fragment } from "react"
import LandingPage from "./pages/LandingPage"

const App = () => {

    const age = 20

    const elem = <div>
        <h1>Hello</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </div>

    return <Fragment>
        <h1>Hello</h1>
        <h2>Hey, I am React</h2>
        <p>Age of user: {age}</p>
        <LandingPage />
        {elem}
    </Fragment>
}

export default App;