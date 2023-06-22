import type { ChartData, ChartOptions } from "chart.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  BarElement,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Placement Company Relation",
      },
    },
  };


const AttendanceChart:React.FC<{
    data: ChartData<"bar">
}> = ({data}) => {
    return (
        <div className="w-full max-w-3xl mx-auto h-full p-4 lg:p-16" >
            <Bar data={data} options={options} />
        </div>
    )
}

export default AttendanceChart