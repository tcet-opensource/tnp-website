// import { useRef, useEffect } from "react";
// import Chart from "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["2020-21", "2021-22", "2022-23"];

const StudentsPlaced = () => {
  const data = [
    {
      label: "Total No. of Students Admitted",
      data: [794, 804, 852],
      borderColor: "rgb(43, 69, 214)",
      tension: 0.1,
    },
    {
      label: "Students Intreseted in Placement",
      data: [537, 512, 541],
      borderColor: "rgb(186, 214, 43)",
      tension: 0.1,
    },
    {
      label: "Total No. of Students Placed",
      data: [440, 426, 374],
      borderColor: "rgb(214, 43, 123)",
      tension: 0.1,
    },
  ];

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Student Placements",
      },
    },
  };
  return (
    <div className="w-full lg:w-2/5  ">
      <Line
        data={{
          labels: labels,
          datasets: data,
        }}
        options={options}
      />
    </div>
  );
};

const StudentCompany = () => {
  const data = [
    {
      label: "Professional Placement",
      data: [697,	718,	685],
      borderColor: "rgb(43, 69, 214)",
      tension: 0.1,
    },
    {
      label: "No of Companies Visited",
      data: [143,	225,	136],
      borderColor: "rgb(186, 214, 43)",
      tension: 0.1,
    },
    
  ];

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
  return (
    <div className="w-full lg:w-2/5  ">
      <Line
        data={{
          labels: labels,
          datasets: data,
        }}
        options={options}
      />
    </div>
  );
};


const PlacementCharts = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around " >
      <StudentsPlaced />
      <StudentCompany />
    </div>
  );
};

export default PlacementCharts;
