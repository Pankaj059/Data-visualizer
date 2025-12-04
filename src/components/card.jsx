export function Card({ title, description, price, image }) {
  return (
    <>
      <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 p-1">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="p-5 space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

          <p className="text-gray-600 text-sm">{description}</p>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-indigo-600">${price}</span>
          </div>
        </div>
      </div>
    </>
  );
}
