import Footer from "../partials/Footer";
import Header from "../partials/Header";
import SideNavigation from "../partials/SideNavigation";
import DashboardCard from "./DashboardCard";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useQueryData from "@/components/custom-hook/useQueryData";
import FetchingSpinner from "@/components/partials/spinner/FetchingSpinner";

import IconNoData from "../partials/IconNoData";
import TableLoader from "../partials/TableLoader";
import { getLevelRecipe } from "./function";
import DashboardAccordion from "./DashboardAccordion";

const Dashboard = () => {
  const {
    isLoading: isLoadingCategory,
    isFetching: isFetchingCategory,
    error: errorCategory,
    data: dataCategory,
  } = useQueryData("/v2/category", "get", "category");

  const {
    isLoading: isLoadingFood,
    isFetching: isFetchingFood,
    error: errorFood,
    data: dataRecipe,
  } = useQueryData("/v2/recipe", "get", "recipe");

  const tableData = getLevelRecipe(dataCategory, dataRecipe);

  return (
    <>
      <section className="layout-main">
        <div className="layout-division">
          <SideNavigation menu="dashboard" />
          <main>
            <Header title="Dashboard" subtitle="Welcome to Jollibee" />
            <div className="p-5 overflow-y-auto custom-scroll">
              <div>
                <div className="grid grid-cols-[1fr_400px] gap-5">
                  <div className="stats">
                    <div className="chart relative pb-24 min-h-[30rem]">
                      <h2>Recipe</h2>
                      {(isFetchingCategory || isFetchingFood) && (
                        <FetchingSpinner />
                      )}
                      {isLoadingCategory || isLoadingFood ? (
                        <TableLoader cols={1} count={15} />
                      ) : (
                        <ResponsiveContainer width="100%" height={400}>
                          <BarChart
                            data={tableData}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category_title" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="easy" stackId="a" fill="#7BB662" />
                            <Bar dataKey="normal" stackId="a" fill="#0000FF" />
                            <Bar dataKey="hard" stackId="a" fill="#E03C32" />
                          </BarChart>
                        </ResponsiveContainer>
                      )}
                    </div>

                    <div className="relative">
                      {isFetchingCategory && !isLoadingCategory && (
                        <FetchingSpinner />
                      )}
                      {isLoadingCategory && <TableLoader cols={4} count={20} />}
                      {dataCategory?.count === 0 && <IconNoData />}
                      <div className="grid grid-cols-4 gap-5 overflow-auto custom-scroll">
                        {dataCategory?.data.map((item, key) => (
                          <DashboardCard
                            item={item}
                            key={key}
                            dataRecipe={dataRecipe}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="sidebar relative overflow-auto custom-scroll h-[calc(100vh-250px)]">
                    {isFetchingCategory && isLoadingCategory && (
                      <FetchingSpinner />
                    )}
                    {isLoadingCategory && <TableLoader cols={1} count={15} />}
                    {dataCategory?.count === 0 && <IconNoData />}
                    {dataCategory?.count > 0 &&
                      dataCategory.data.map((item, key) => {
                        const recipeItems = dataRecipe?.data.filter(
                          (recipeItem) =>
                            recipeItem.recipe_category_id === item.category_aid
                        );
                        return (
                          <DashboardAccordion
                            item={item}
                            key={key}
                            recipeItems={recipeItems}
                          />
                        );
                      })}
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
