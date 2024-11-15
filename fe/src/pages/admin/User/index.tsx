
import React, { useState } from "react";
import UserList from "./UserList";
import AddUserForm from "./AddUser";
import EditUserForm from "./EditUser";
import UserDetail from "./DetailUser";

const Users = () => {
  const [view, setView] = useState("list");
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      {view === "list" && (
        <UserList
          onAddUser={() => setView("add")}
          onViewDetail={(id) => {
            setSelectedUser(id);
            setView("detail");
          }}
          onEditUser={(user) => {
            setSelectedUser(user);
            setView("edit");
          }}
        />
      )}
      {view === "add" && <AddUserForm onUserAdded={() => setView("list")} />}

      {view === "edit" && selectedUser && (
        <EditUserForm
          user={selectedUser}
          onUserUpdated={() => setView("list")}
        />
      )}
      {view === "detail" && selectedUser && (
        <UserDetail userId={selectedUser} onBack={() => setView("list")} />
      )}
    </div>
  );
};

export default Users;
