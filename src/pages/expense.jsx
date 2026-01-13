import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import CircularProgress from "@mui/material/CircularProgress";
import Icon from "../components/Elements/Icon";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await expenseService();
      setExpenses(data || []);
    } catch (err) {
      console.error(err);
      if (err.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const getCategoryIcon = (category) => {
    const categoryLower = category?.toLowerCase() || "";
    if (categoryLower.includes("food")) return <Icon.Food />;
    if (categoryLower.includes("transport")) return <Icon.Transport />;
    if (categoryLower.includes("shopping")) return <Icon.Shopping />;
    if (
      categoryLower.includes("entertainment") ||
      categoryLower.includes("game")
    )
      return <Icon.Gamepad />;
    if (categoryLower.includes("house") || categoryLower.includes("housing"))
      return <Icon.House />;
    if (categoryLower.includes("movie")) return <Icon.Movie />;
    return <Icon.Other />;
  };

  return (
    <>
      <MainLayout>
        <div className="mb-6">
          <h1 className="text-2xl text-gray-03">Expenses Comparison</h1>
        </div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 text-primary">
            <CircularProgress color="inherit" size={50} />
            <p className="mt-4">Loading Data...</p>
          </div>
        ) : expenses.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-64 text-gray-03">
            <p>Tidak ada data expenses</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expenses.map((item, index) => (
              <div
                key={item.id || index}
                className="bg-white rounded-xl overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 bg-[#F3F3F3]">
                  <div className="flex items-center">
                    <div className="bg-special-bg text-gray-02 p-3 rounded-lg">
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="ms-4">
                      <h3 className="text-gray-02 capitalize font-bold">
                        {item.category}
                      </h3>
                      <p className="text-xl font-bold">${item.amount}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end">
                      <span className="font-bold text-gray-02">
                        {item.percentage}%
                      </span>
                      <span
                        className={
                          item.trend === "up"
                            ? "text-red-600"
                            : "text-green-500"
                        }
                      >
                        {item.trend === "up" ? (
                          <Icon.ArrowUp size={16} />
                        ) : (
                          <Icon.ArrowDown size={16} />
                        )}
                      </span>
                    </div>
                    <p className="text-xs text-gray-03">
                      Compare to the last month
                    </p>
                  </div>
                </div>

                {item.detail && item.detail.length > 0 && (
                  <div className="p-4 bg-white">
                    {item.detail.map((detail, idx) => (
                      <div
                        key={idx}
                        className={`flex justify-between items-center py-3 ${
                          idx !== item.detail.length - 1
                            ? "border-b-2 border-gray-200"
                            : ""
                        }`}
                      >
                        <span className="text-gray-02 font-bold">
                          {detail.item}
                        </span>
                        <div className="text-right">
                          <span className="font-bold text-gray-02">
                            ${detail.amount}
                          </span>
                          <p className="text-xs text-gray-03">{detail.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </MainLayout>
    </>
  );
}

export default Expenses;
