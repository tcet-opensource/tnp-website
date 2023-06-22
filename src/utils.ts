import type { ChartOptions } from "chart.js";

export const optionGenerator= (title: string): ChartOptions => {
    return ({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: title,
        },
      },
    });
  };