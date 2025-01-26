import './App.css';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import {Routes, Route} from "react-router-dom";
import {routesArray} from "./entities/routesArray";
import Recipes0 from './component/pages/recipes/Recipes0';

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/category/:id' element={<Recipes0/>} />
                {
                    routesArray.map(route => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={<route.component />}
                        exact/>
                    ))
                }
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
