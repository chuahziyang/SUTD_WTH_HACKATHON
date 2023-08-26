const activites = [
  {
    date: "27th Aug 2023",
    time: "04:00 PM",
    activity: "Walked a total distance of 5.5km",
    pts: "600",
  },
  {
    date: "26th Aug 2023",
    time: "08:59 AM",
    activity: "Carpooled a total distance of 3.4km",
    pts: "475",
  },
  // More people...
];

export default function Activity() {
  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all activities within the past 30 days including their
            date, time, and a point rewards summary.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#009278] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#009278] focus:outline-none focus:ring-2 focus:ring-[#009278] focus:ring-offset-2 sm:w-auto"
          >
            New Activity
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Date/Time
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Activity
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Points Awarded
                    </th>
                    {/* <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
        Role
      </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {activites.map((activity) => (
                    <tr
                      key={activity.date}
                      className="divide-x divide-gray-200"
                    >
                      <td className="whitespace-nowrap py-4 pl-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {activity.date}
                        <span className="whitespace-nowrap pb-1 pl-2 align-middle text-xs text-gray-500">
                          at {activity.time}
                        </span>
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {activity.activity}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                        {activity.pts}
                      </td>
                      {/* <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-6">{person.role}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
