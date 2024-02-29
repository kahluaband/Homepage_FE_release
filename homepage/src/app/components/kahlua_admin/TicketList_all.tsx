import React from "react";
import { useState, useEffect } from "react";
import { getAuthAxios } from "@/apis/authAxios";
import AllTicketItem from "./TicketItem_all";

const AllTicketList = () => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const [tickets, setTickets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await authAxios.get(
          `https://api.kahluaband.com/kahlua_admin/tickets/all/`
        );
        setTickets(response.data.data.tickets);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>대기 중 ...</div>;
  }

  if (!tickets) {
    return null;
  }

  return (
    <>
      {tickets.map((ticket) => (
        <AllTicketItem key={ticket.id} ticket={ticket} />
      ))}
    </>
  );
};

export default AllTicketList;
