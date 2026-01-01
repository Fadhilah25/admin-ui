import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardBalance from "../components/Fragments/CardBalance";
import CardGoal from "../components/Fragments/CardGoal";
import CardUpcomingBill from "../components/Fragments/CardUpcomingBill";
import CardRecentTransaction from "../components/Fragments/CardRecentTransaction";
import CardStatistic from "../components/Fragments/CardStatistic";
import CardExpenseBreakdown from "../components/Fragments/CardExpenseBreakdown";
import {
  transactions,
  bills,
  expensesBreakdowns,
  balances,
  goals,
  expensesStatistics,
} from "../data";
import { goalService } from "../services/dataService";
import { AuthContext } from "../context/authContext";

function Dashboard() {
  const [goalsData, setGoalsData] = useState(goals);
  const authContext = useContext(AuthContext);
  const logout = authContext?.logout;

  const fetchGoals = async () => {
    try {
      const data = await goalService();
      setGoalsData(data);
    } catch (err) {
      console.error("Gagal mengambil data goals:", err);
      if (err.status === 401 && logout) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <>
      <MainLayout>
        <div className="grid sm:grid-cols-12 gap-6">
          <div className="sm:col-span-4">
            <CardBalance data={balances} />
          </div>
          <div className="sm:col-span-4">
            <CardGoal data={goalsData} />
          </div>
          <div className="sm:col-span-4">
            <CardUpcomingBill data={bills} />
          </div>
          <div className="sm:col-span-4 sm:row-span-2">
            <CardRecentTransaction data={transactions} />
          </div>
          <div className="sm:col-span-8">
            <CardStatistic data={expensesStatistics} />
          </div>
          <div className="sm:col-span-8">
            <CardExpenseBreakdown data={expensesBreakdowns} />
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Dashboard;
