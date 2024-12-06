document.addEventListener("DOMContentLoaded", () => {
  const options = {
    chart: {
      type: "line",
      height: 404,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 1,
    },
    series: [
      {
        name: "Хозяева",
        data: [0, 4, 19, 24, 29, 45, 67, 70, 76, 82],
      },
      {
        name: "Гости",
        data: [0, 4, 12, 45, 24, 29, 30, 67, 40, 82],
      },
    ],
    xaxis: {
      categories: Array.from({ length: 10 }, (_, i) => i * 10),
    },

    colors: ["#424fc7", "#ffb80c"],
    legend: {
      position: "top",
      horizontalAlign: "left",
      markers: {
        size: 50,
      },
    },
  };

  const chart = new ApexCharts(document.querySelector("#rightChart"), options);
  chart.render();
});
