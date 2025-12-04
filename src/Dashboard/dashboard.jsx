import { useEffect, useState } from "react";
import { Card } from "../components/card";
import { Loader } from "../components/loader";

let api = "https://fakestoreapi.com/products";
const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [searchedItem, setSearchedItem] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredItems = products.filter((item) =>
    item.title.toLowerCase().includes(searchedItem.toLowerCase())
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(api);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="p-6 bg-gray-200">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="flex justify-end mb-6">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-2"
                value={searchedItem}
                onChange={(e) => setSearchedItem(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
              {filteredItems?.map((item) => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Dashboard;
