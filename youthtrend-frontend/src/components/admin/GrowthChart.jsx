import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const data = [
  { day: "01", users: 120000 },
  { day: "05", users: 124000 },
  { day: "10", users: 130000 },
  { day: "15", users: 134000 },
  { day: "20", users: 138000 },
  { day: "25", users: 141000 },
  { day: "30", users: 142830 },
];


function GrowthChart() {

  return (

    <div className="bg-white rounded-2xl border p-8">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h2 className="text-2xl font-bold text-gray-900">
            User Growth
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Growth across all campus communities
          </p>

        </div>


        <select
          className="
            border
            rounded-xl
            px-4
            py-2
            text-sm
            outline-none
          "
        >

          <option>
            Daily View
          </option>

          <option>
            Weekly View
          </option>

          <option>
            Monthly View
          </option>

        </select>

      </div>



      <div className="h-75">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              hide
            />


            <Tooltip />


            <Line

              type="monotone"

              dataKey="users"

              stroke="#005429"

              strokeWidth={4}

              dot={{
                r:5,
              }}

            />

          </LineChart>

        </ResponsiveContainer>

      </div>


    </div>

  );

}


export default GrowthChart;