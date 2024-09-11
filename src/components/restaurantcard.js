import CDN_URL from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg shadow-md bg-white transition hover:shadow-lg hover:scale-105 duration-200 ease-in-out">
     
      <img
        className="rounded-lg object-cover w-full h-[180px] mb-3"
        alt={`${name} restaurant`}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
   
      <div className="flex flex-col justify-between h-[130px]">
        <h3 className="font-bold text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-2">
          <span className={`text-sm font-medium ${avgRating >= 4 ? 'text-green-600' : 'text-red-600'}`}>
            {avgRating} ⭐
          </span>
          <span className="text-xs text-gray-500">{sla?.slaString}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
