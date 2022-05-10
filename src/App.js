import { Routes, Route, Link, Router } from "react-router-dom";
import {Fragment} from "react"

import {publicRoute} from './routes'
import "./App.css";
import {DefaultLayout} from './component/Layout'


function App() {
  return (
    <div className="App">
      <Routes>
        {
          publicRoute.map((route,index) =>{
            const Page = route.component

            let Layout = DefaultLayout

            if(route.layout) {
              Layout = route.layout
            }else if(route.layout===null){
                Layout = Fragment
            }
            return <Route key={index} path={route.path} 
            element={
            <Layout>
              <Page/>
            </Layout>} />
          })
        }
      </Routes>
    </div>
  );
}

export default App;
