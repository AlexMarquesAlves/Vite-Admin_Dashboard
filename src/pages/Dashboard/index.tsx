import { ReactNode } from "react";
import statusCards from "../../assets/JsonData/status-card-data.json";
import StatusCard from "../../components/StatusCard";
import Chart from "react-apexcharts";

interface DashboardProps {
  children: ReactNode;
}

const chartOption: any = {
  series: [
    {
      name: "Online Customers",
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
    },
    {
      name: "Store Customers",
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10],
    },
  ],
  options: {
    color: ["#6ab04c", "#2980b9"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  },
};

function Dashboard({ children }: DashboardProps) {
  return (
    <div>
      <h2 className="page-header">
        <div className="row">
          <div className="col-6">
            <div className="row">
              {statusCards.map((item, index) => (
                <div className="col-6" key={index}>
                  <StatusCard
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-6">
            <div className="card full-height">
              {/* chart */}
              <Chart
                options={chartOption.options}
                series={chartOption.series}
                type="line"
                height="100%"
              />
            </div>
          </div>
        </div>
      </h2>
    </div>
  );
}

export default Dashboard;
