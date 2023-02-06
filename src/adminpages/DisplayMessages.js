import React from "react";
import MessageBox from "./MessageBox";

function DisplayMessages({ allmessages }) {
  console.log("mess", allmessages);
  return (
    <main className="displayMessagesMain">
      <MessageBox allmessages={allmessages} />
    </main>
  );
}

export default DisplayMessages;
