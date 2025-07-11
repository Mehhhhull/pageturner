import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Books from './Pages/Books';
import BookDetails from './Pages/BookDetails';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import MyOrders from './Pages/MyOrders';
import AddAddress from './Pages/AddAddress';
import Navbar from './Components/Navbar';


const App = () => {
  const isAdminPath=useLocation().pathname.includes('admin');
  return (
    <div>
      {isAdminPath ? null : <Navbar/>}
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/books" element= {<Books/>}/>
        <Route path="/book/:id" element= {<BookDetails/>}/>
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/cart" element= {<Cart/>}/>
        <Route path="/my-orders" element= {<MyOrders/>}/>
        <Route path="/add-address" element= {<AddAddress/>}/>

      </Routes>
    </div>
  )
}

export default App
