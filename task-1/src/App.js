
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Trial from './components/Trial';
import Default from './components/Default';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/*" element={<Default />} />
      </Routes>
      
  </BrowserRouter>
  );
}

export default App;
