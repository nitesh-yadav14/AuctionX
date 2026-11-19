
import {
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router";

const auctions = [
  {
    title: "Vintage Film Camera - Excellent Condition",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=85",
    price: "$245.00",
    bids: 12,
    time: "2h 15m",
    color: "bg-rose-500",
  },
  {
    title: "Luxury Swiss Watch - Gold Plated",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=900&q=85",
    price: "$1,250.00",
    bids: 28,
    time: "5h 42m",
    color: "bg-amber-500",
  },
  {
    title: "Original Oil Painting - Abstract Art",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=900&q=85",
    price: "$890.00",
    bids: 7,
    time: "1d 3h",
    color: "bg-emerald-500",
  },
];

export const Auction = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Heading */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Trending
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Live Auctions
            </h2>
          </div>

          <Link
            to="/signup"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition"
          >
            View all <FaChevronRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Auction Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {auctions.map((item) => (
            <Link
              key={item.title}
              to="/signup"
              className="group bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-gray-300/80 overflow-hidden transition-all"
            >

              {/* Product Image */}
              <div className="relative aspect-[3/2] bg-gray-100 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Countdown Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`${item.color} text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-sm inline-flex items-center gap-1`}
                  >
                    <FaClock className="h-2.5 w-2.5" />
                    {item.time}
                  </span>
                </div>

              </div>

              {/* Auction Details */}
              <div className="p-4">

                <h3 className="font-semibold text-sm text-gray-900 mb-3 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                      Current Bid
                    </p>

                    <p className="text-lg font-bold text-gray-900">
                      {item.price}
                    </p>
                  </div>

                  <span className="text-xs text-gray-400">
                    {item.bids} bids
                  </span>
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* Mobile View All */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            to="/signup"
            className="text-sm font-medium text-indigo-600"
          >
            View all auctions &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
};
