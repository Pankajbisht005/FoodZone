import { useDispatch } from "react-redux";
import CDN_URL from "../utils/constant";
import { addItem } from "../utils/cartslice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="container mx-auto p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mb-4 border border-gray-200 rounded-lg flex justify-between items-center shadow-md"
        >
        
          <div className="w-8/12">
            <div className="flex flex-col">
              <span className="font-semibold text-lg">{item.card.info.name}</span>
              <span className="text-green-600 font-medium">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-gray-500 text-sm mt-1">{item.card.info.description}</p>
            </div>
          </div>
          
      
          <div className="w-4/12 flex flex-col items-center">
            <img
              src={`${CDN_URL}${item.card.info.imageId}`}
              alt={item.card.info.name}
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
