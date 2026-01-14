import React from "react";
import CardNew from "../Elements/CardNew";
import CircularProgress from "@mui/material/CircularProgress";

function CardExpense(props) {
  const { data, loading } = props;

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-64 text-primary">
        <CircularProgress color="inherit" size={50} />
        <p className="mt-2 font-semibold">Loading Data...</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center text-gray-400 py-20">
        No expense data available
      </div>
    );
  }

  return (
    <>
      <h2 className="text-xl text-gray-500 mb-4">
        Expenses Comparison
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((expense) => (
          <CardNew
            key={expense.id}
            title=""
            className="bg-white border border-gray-200 rounded-xl"
            desc={
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-md text-gray-500">
                      {expense.icon}
                    </div>

                    <div>
                      <div className="text-xs text-gray-400 font-semibold">
                        {expense.category}
                      </div>
                      <div className="text-lg font-bold text-gray-800">
                        ${expense.amount}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 text-xs font-semibold">
                      <span className="text-gray-500">
                        {expense.percentage}%
                      </span>
                      {expense.arrow}
                    </div>

                    <div className="text-[11px] text-gray-400 mt-1">
                      Compare to the last month
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200" />
              </div>
            }
          />
        ))}
      </div>
    </>
  );
}

export default CardExpense;
