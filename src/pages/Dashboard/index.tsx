import { ReactNode } from "react";
import statusCards from "../../assets/JsonData/status-card-data.json";
import StatusCard from "../../components/StatusCard";

interface DashboardProps {
  children: ReactNode;
}

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
            <div className="card full-height">{/* chart */}</div>
          </div>
        </div>
      </h2>
    </div>
  );
}

export default Dashboard;
