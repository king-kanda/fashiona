
import './App.css';
import { Navbar  ,CTA , Footer} from './components'
import { Hero , Featured } from './containers'
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
// importing page components routing and switching
import about from './pages/about'
import counter from './pages/counter'



function App() {

  

  return (
   <Router forceRefresh>
       < div className='app' >
         <div className='navbar-ection'>
            <Navbar/>
         </div>
         <div className=''>
           <Switch>
               {/* where content will go dynamic content on switch and react routers */}
               <Route path='/' exact>
                  <Hero />
                  <Featured />
               </Route>
               <Route path='/about' component={about} >
                  {/* components go in here for the about us page */}
               </Route>
               <Route path='/counter' component={counter} >
                  {/* components go in here for the about us page */}
               </Route>
               {/* use the above code to create subsequent routees */}
               
           </Switch>
         </div>
         {/* <CTA /> */}
         <Footer name="jane"  tools="" />
      </div>
   </Router>
  );
}

export default App;
