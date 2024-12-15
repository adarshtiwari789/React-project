


import Login from './component/Login'
import Profile from './component/Profile'

import Usercontextprovider from './Context/Usercontextprovider'

function App() {
 

  return (
<Usercontextprovider>
<h1>chai or code</h1>
<Login/>
<Profile/>

</Usercontextprovider>
  )
}

export default App
