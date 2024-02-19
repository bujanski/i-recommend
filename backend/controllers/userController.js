const getAllUsers = (req, res) => {
    console.log(users);

    res.json(users)
}

const getAUser = (req,res) => {

    let user = users.filter(u => u.id === + req.params.id)

    if (users.length ===0) {
        res.end();
    } else {
        res.json(user[0]);
    }
}

const deleteUser = (req,res) => {
    users = users.filter(u => u.id !== + req.params.id);

    console.log(users);

    res.json({message: 'Deleted user with id of' + req.params.id});
}

module.exports = {
    getAllUsers,
    getAUser,
    deleteUser,
}