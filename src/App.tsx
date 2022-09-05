import './App.css';
import ProductStories from './ProductStories';
import ProductDetails from './texts/ProductDetails';

function App() {
  return (
    <div className="App">
      <div className="stories-container">
        {ProductDetails.map((item, idx) => (
          <ProductStories
            key={idx}
            title={item.title}
            caption={item.caption}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
