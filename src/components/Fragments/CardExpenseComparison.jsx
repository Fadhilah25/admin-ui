import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

function CardExpenseComparison(props) {
  const { data } = props;

  const categoryMap = {
    housing: { name: "Housing", icon: <Icon.House /> },
    food: { name: "Food", icon: <Icon.Food /> },
    transportation: { name: "Transportation", icon: <Icon.Transport /> },
    entertainment: { name: "Entertainment", icon: <Icon.Gamepad /> },
    shopping: { name: "Shopping", icon: <Icon.Shopping /> },
    others: { name: "Others", icon: <Icon.Other /> },
  };

  const renderExpenseCard = (expenseData) => {
    const categoryInfo = categoryMap[expenseData.category];

    if (!categoryInfo) return null;

    const isIncrease = expenseData.trend === "up";
    const percentageColor = isIncrease
      ? "text-special-red"
      : "text-special-green";
    const arrow = isIncrease ? (
      <Icon.ArrowUp size={16} />
    ) : (
      <Icon.ArrowDown size={16} />
    );

    return (
      <div
        key={expenseData.category}
        className="bg-gray-06 rounded-lg px-6 py-5 shadow-xl"
      >
        <div className="flex items-center mb-4">
          <div className="bg-special-bg text-gray-02 p-4 rounded-lg flex flex-col place-content-center">
            {categoryInfo.icon}
          </div>
          <div className="ms-4 flex-1">
            <div className="text-gray-02">{categoryInfo.name}</div>
            <div className="text-2xl font-bold">${expenseData.amount}</div>
          </div>
          <div className="text-right">
            <div className={`flex items-center justify-end ${percentageColor}`}>
              <span className="text-sm font-bold">
                {expenseData.percentage}%
              </span>
              <span className="ms-1">{arrow}</span>
            </div>
            <div className="text-xs text-gray-03 mt-1">
              Compare to the last month
            </div>
          </div>
        </div>
        <div className="space-y-3">
          {expenseData.detail &&
            expenseData.detail.map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <span className="text-sm font-medium text-gray-02">
                  {item.item}
                </span>
                <div className="text-right">
                  <div className="text-sm font-bold text-black">
                    ${item.amount}
                  </div>
                  <div className="text-xs text-gray-03">{item.date}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <Card
        title="Expenses Comparison"
        desc={
          !data || data.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-64">
              <CircularProgress />
              <span className="mt-3 text-primary">Loading Data</span>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((expense) => renderExpenseCard(expense))}
            </div>
          )
        }
      />
    </>
  );
}

export default CardExpenseComparison;
