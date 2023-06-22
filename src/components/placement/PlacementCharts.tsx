// import { useRef, useEffect } from "react";
// import Chart from "chart.js/auto";
import type { ChartData, ChartOptions } from "chart.js";
import React from "react"
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

import {optionGenerator} from "../../utils"

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

const NoOfStudentsPlaced = {
  labels: ["2020-2021", "2021-2022", "2022-23*"],
  datasets: [
    {
      label: "Total No. of Students Admitted",
      data: [794, 804, 852],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      // fill:true,
      borderWidth: 1,
    },
    {
      label: "Students Interested in Placement",
      data: [537, 512, 541],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      // fill:true,
      borderWidth: 1,
    },
    {
      label: "Total No. of Students Placed",
      data: [440, 426, 374],
      backgroundColor: "rgba(153, 102, 255, 0.5)",
      borderColor: "rgba(153, 102, 255, 1)",
      // fill:true,
      borderWidth: 1,
    },
    {
      label: "Professional Placement",
      data: [697, 718, 685],
      backgroundColor: "rgba(255, 159, 64, 0.5)",
      borderColor: "rgba(255, 159, 64, 1)",
      // fill:true,
      borderWidth: 1,
    },
    {
      label: "No. of Companies Visited",
      data: [143, 225, 136],
      backgroundColor: "rgba(201, 203, 207, 0.5)",
      borderColor: "rgba(201, 203, 207, 1)",
      // fill:true,
      borderWidth: 1,
    },
  ],
};

const PercentageOfPlacements = {
  labels: ["2020-2021", "2021-2022", "2022-23*"],
  datasets: [
    {
      label: "% of Placement",
      data: [82, 83, 69],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "% of Professional Placement",
      data: [88, 89, 80],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const SalaryPackagesInINRLPA = {
  labels: ["2020-2021", "2021-2022", "2022-23*"],
  datasets: [
    {
      label: "Maximum",
      data: [30.0, 30.0, 44.0],
      backgroundColor: "rgba(54, 162, 235, 0.5)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "Minimum",
      data: [1.8, 3.0, 3.0],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
    {
      label: "Average",
      data: [4.32, 4.95, 6.0],
      backgroundColor: "rgba(75, 192, 192, 0.5)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      label: "Median",
      data: [3.6, 4.0, 4.5],
      backgroundColor: "rgba(255, 205, 86, 0.5)",
      borderColor: "rgba(255, 205, 86, 1)",
      borderWidth: 1,
    },
  ],
};

const PlacementCharts = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-8 p-4 lg:p-16 justify-center ">
      <div className=" lg:w-4/5">
        <Bar data={NoOfStudentsPlaced} options={optionGenerator("Student Placement Relation")} />
      </div>
      <div className=" lg:w-2/5">
        <Bar data={PercentageOfPlacements} options={optionGenerator("Placement Percentage Relation")} />
      </div>
      <div className=" lg:w-2/5">
        <Bar data={SalaryPackagesInINRLPA} options={optionGenerator("Student Salary Relation")} />
      </div>
    </div>
  );
};

export default PlacementCharts;
