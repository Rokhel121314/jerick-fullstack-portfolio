import Axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import DisplayMessages from "./DisplayMessages";
import { URL } from "../App";

function Admin() {
  const [allmessages, setAllmessages] = useState([]);
  // console.log("allmessages", allmessages);

  // reading all messages

  const key = "message";

  const readAllMessages = async () => {
    try {
      const { data } = await Axios.get(`${URL}/api/messages`);
      setAllmessages(
        data.sort((a, b) => {
          return a.createdAt > b.createdAt ? -1 : 1;
        })
      );
    } catch (error) {
      console.log(error.message);
      console.log(error);
    }
  };

  useEffect(() => {
    readAllMessages();
  }, []);

  return (
    <main className="adminMain">
      <AdminNav allmessages={allmessages} />
      <DisplayMessages allmessages={allmessages} />
    </main>
  );
}

export default Admin;
