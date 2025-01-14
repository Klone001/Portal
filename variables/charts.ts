export const lineChartSeries = [
  {
    name: "This Month",
    data: [0, 400, 380, 1000, 700, 600, 1400],
    color: "#005FCF",
  },
  {
    name: "Last Month",
    data: [0, 300, 644, 0, 800, 406, 1000],
    color: "#ACACAC",
  },
];

export const lineChartOption = {
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
    floating: true,
    fontSize: "13px",
    fontWeight: 400,
    offsetY: -4,
  },
  fontFamily: 'EFCircular, sans-serif',
  theme: {
    mode: "light",
  },
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: '2px',
  },
  tooltip: {
    style: {
      fontSize: "12px",

      backgroundColor: "#000000"
    },
    theme: 'dark',
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: true,
      paddingTop: '10px',
    },
    axisTicks: {
      show: true,
    },
    labels: {
      style: {
        colors: "#ACACAC",
        fontSize: "12px",
        fontWeight: "400",
      },
    },
    type: "text",
    range: undefined,
    categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
  },
  yaxis: {
    show: true,
    opposite: true,
    labels: {
      show: true,
      style: {
        colors: '#ACACAC',
        fontSize: '13px',

        fontWeight: 400,
      },
    },
  },
};

export const barCharSeries = [
  {
    name: "New users",
    data: [70, 50, 90, 60, 65, 75, 75],
    color: "#FA7026",
  },
  {
    name: "Returning users",
    data: [50, 30, 10, 30, 60, 50, 50],
    color: "#D9D9D9",
  }
];

export const barChartOptions = {
  tooltip: {
    style: {
      fontSize: "13px",
      backgroundColor: "#000000"
    },
    theme: 'dark',
    onDatasetHover: {
      style: {
        fontSize: "12px",

      },
    },
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#ACACAC",
        fontSize: "12px",
        fontWeight: "400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    opposite: true,
    labels: {
      show: true,
      style: {
        colors: '#ACACAC',
        fontSize: '13px',

        fontWeight: 400,
      },
    },
  },

  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#FA7026", "#D9D9D9"],
  },
  colors: ["#FA7026", "#D9D9D9"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
    floating: true,
    fontSize: "13px",
    fontWeight: 400,
    offsetY: -4,
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "40%",
      gap: 5,
    },
  },
  stroke: {
    colors: ["transparent"],
    width: 2
  }
};

// TOP CATEGORY
export const topCategorySeries = [
  {
    name: "Bookings",
    data: [70, 50, 90, 60, 65],
    color: "#2C5B57",
  },
  {
    name: "Vendors",
    data: [21, 30, 10, 30, 60],
    color: "#D9D9D9",
  }
];

export const topCategoryOptions = {
  tooltip: {
    style: {
      fontSize: "13px",
      backgroundColor: "#000000"
    },
    theme: 'dark',
    onDatasetHover: {
      style: {
        fontSize: "12px",
      },
    },
  },
  chart: {
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: ["Female salon", "Male salon", "Spa", "Tattoo"],
    show: false,
    labels: {
      show: false,
      style: {
        colors: "#ACACAC",
        fontSize: "12px",
        fontWeight: "400",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      colors: '#000',
      style: {
        colors: '#000',
        fontSize: '13px',
        fontWeight: 400,
      },
    },
  },
  grid: {
    borderColor: "rgba(163, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 0.5,
      },
    },
    row: {
      opacity: 0.5,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#2C5B57", "#D9D9D9"],
  },
  colors: ["#2C5B57", "#D9D9D9"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
    floating: true,
    fontSize: "13px",
    fontWeight: 400,
    offsetY: -4,
  },
  stroke: {
    colors: ["transparent"],
    width: 2
  },
  plotOptions: {
    bar: {
      borderRadius: 5,
      columnWidth: "40%",
      horizontal: true,
    },
  },
};
