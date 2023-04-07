let currentUsers = [
    { id : "12345", name : "admin", email : "admin@gmail.com", password : 12345 },
    { id : "44564", name : "admin1", email : "admin1@gmail.com", password : 12345 },
    { id : "45678", name : "admin2", email : "admin2@gmail.com", password : 12345 },
    { id : "23486", name : "user1", email : "user@gmail.com", password : 12345 },
];

const setCurrentUsers = (user) => {
    currentUsers.push(user)
};

const setUsers = (users) => {
    currentUsers = users
}

const getCurrentUsers = () => {
  return currentUsers;
};

export {
    setCurrentUsers,
    getCurrentUsers,
    setUsers
}