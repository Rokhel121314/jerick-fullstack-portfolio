import React from "react";

function AdminNav({ allmessages }) {
  const messagesCounts = allmessages.length;

  return (
    <nav className="adminNav">
      <div className="messageHeader">MESSAGES</div>
      <div className="adminNavItems">
        <ul>
          <li>ALL MESSAGES ({messagesCounts})</li>
          <li>NEW MESSAGES</li>
          <li>OLD MESSGES</li>
          <li>STARRED</li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminNav;
