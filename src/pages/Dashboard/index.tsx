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
            {statusCards.map((item, index) => (
              <div className="col-6">
                {/* status card here */}
                {item.title}
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </h2>
    </div>
  );
}

export default Dashboard;
