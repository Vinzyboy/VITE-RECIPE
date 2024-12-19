import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardCard from "./DashboardCard";
import DashboardAccordion from "./DashboardAccordion";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import useQueryData from "@/components/custom-hook/useQueryData";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

import IconNoData from "../partials/IconNoData";
import TableLoader from "../partials/TableLoader";
import { getCategoryPrices } from "./function";

const Dashboard = () => {
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Dashboard" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div>
                <div className="grid grid-cols-[1fr_400px] gap-5">
                  <div className="stats ">
                    <div className="chart relative pb-24 min-h-[30rem]">
                      <h2>Recipe</h2>

                      <BarChart
                        width={1000}
                        height={400}
                        data={1}
                        margin={{
                          top: 20,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey=""
                          fill="#8884d8"
                          activeBar={<Rectangle fill="yellow" stroke="blue" />}
                        />
                      </BarChart>
                    </div>
                    <div className="relative">
                      <div className="grid grid-cols-4 gap-5  overflow-auto custom-scroll ">
                        {/* <DashboardCard
                          item={item}
                          key={key}
                          dataFood={dataFood}
                        /> */}
                      </div>
                    </div>
                  </div>
                  <div className="sidebar relative overflow-auto custom-scroll h-[calc(100vh-250px)]">
                    {/* <DashboardAccordion
                            item={item}
                            key={key}
                            foodItems={foodItems}
                          />  */}
                  </div>
                </div>
              </div>
            </div>

            <Footer />
          </main>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
