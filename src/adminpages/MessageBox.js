import React, { useEffect, useState } from "react";

function MessageBox({ allmessages }) {
  return (
    <>
      {allmessages.map((x) => {
        return (
          <div className="messageBox" key={x._id}>
            <div className="senderName">{x.firstName}</div>
            <div className="senderMessage">
              <div>{x.message.slice(0, 20) + " ..."}</div>
              <div>{x.createdAt}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MessageBox;
