import { Search, Filter } from "lucide-react"

export default function SearchAndFilter() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100 max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search events..."
            className="input input-bordered w-full pl-10 pr-4 py-2 border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
          <select className="select select-bordered border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
            <option value="">All Categories</option>
            <option value="science">Science</option>
            <option value="math">Math</option>
            <option value="literature">Literature</option>
          </select>
          <input
            type="date"
            className="input input-bordered border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
          />
          <button className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 border-none">
            <Filter className="w-5 h-5 mr-2" />
            Filter
          </button>
        </div>
      </div>
    </div>
  )
}
