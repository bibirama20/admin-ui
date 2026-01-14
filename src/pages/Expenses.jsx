import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layout/MainLayout";
import CardExpense from "../components/Fragments/CardExpenses";
import axios from "axios";
import { expensesBreakdowns } from "../data";

function Expenses() {
  const [expensesData, setExpensesData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get(
          "https://jwt-auth-eight-neon.vercel.app/expenses",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response?.data?.data;

        if (Array.isArray(data) && data.length > 0) {
          setExpensesData(data);
        } else {
          setExpensesData(expensesBreakdowns); 
        }
      } catch (error) {
        console.error("Gagal mengambil data expenses:", error);
        setExpensesData(expensesBreakdowns); 
      } finally {
        setLoading(false); 
      }
    };

    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="w-full px-6 py-6">
        <div className="max-w-[1400px] mx-auto">
          <CardExpense data={expensesData} loading={loading} />
        </div>
      </div>
    </MainLayout>
  );
}

export default Expenses;
