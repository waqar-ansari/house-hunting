"use client";
import styles from "./property-chart.module.css";
import { Select } from "antd";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const PropertyChart = () => {
  const chartData = {
    series: [
      {
        name: "PV",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "UV",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
          show: !1,
        },
      },
      plotOptions: {
        bar: {
          horizontal: !1,
          columnWidth: "55%",
          borderRadius: 5, // Apply border radius
          borderRadiusApplication: "end",
        },
      },
      dataLabels: {
        enabled: !1,
      },
      stroke: {
        show: !0,
        width: 2,
        colors: ["transparent"],
      },
      colors: ["#FF5A3C", "#004274"],
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          style: {
            fontWeight: "500",
          },
        },
      },
      grid: {
        borderColor: "#f1f1f1",
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (e: number) {
            return "$ " + e + " thousands";
          },
        },
      },
    } as ApexOptions,
  };

  return (
    <div>
      <div className={`${styles.ic_chart_title} ic_mb_20`}>
        <h5 className="ic_fw_600 ic_title_color">Property Views</h5>
        <div className={styles.ic_right}>
          <p className="ic_title_color">Total: 769</p>
          <Select
            defaultValue="year"
            style={{
              width: 120,
            }}
            options={[
              {
                value: "year",
                label: "Yearly",
              },
              {
                value: "month",
                label: "Monthly",
              },
            ]}
          />
        </div>
      </div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default PropertyChart;
