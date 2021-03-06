const db = require('../models');
const User = db.rest.models.user;

exports.getUsers = async (req, res) => {

  const user = await User.findAll()

  if (!user) {
    return res.status(400).send({
      message: `No users records found`
    })
  }

  return res.send(user);
}

exports.getUser = async (req, res) => {
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id
    }
  })

  if (!user) {
    return res.status(400).send({
      message: `No user with id: ${id} found`
    })
  }

  return res.send(user);
}

exports.createUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({
      message: 'You need to include a username and password to create a user'
    })
  }

  let usernameExists = await User.findOne({
    where: {
      username,
    }
  })

  if (usernameExists) {
    return res.status(400).send({
      message: `A user with the username: ${username} already exists`
    })
  }

  try {

    let newUser = await User.create({
      username,
      password
    })
    return res.send(newUser);

  } catch (error) {

    return res.status(500).send({
      message: `Error: ${error.message}`
    })

  }

}

exports.updateUser = async (req, res) => {
  const { username, password } = req.body;
  const { id } = req.params;

  const user = await User.findOne({
    where: {
      id
    }
  });

  if (!user) {
    res.status(400).send({
      message: `No user exists with the id: ${id}`
    })
  }

  try {

    if (username) {
      user.username = username
    }
    if (password) {
      user.password = password
    }

    await user.save();
    return res.send({
      message: `User ${id} has been updated successfully!`
    })

  } catch (error) {

    return res.status(500).send({
      message: `Error: ${error.message}`
    })

  }

}

exports.deleteUser = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).send({
      message: 'Please provide the id of the user you are trying to delete'
    })
  }

  const user = await User.findOne({
    where: {
      id
    }
  });

  if (!user) {
    res.status(400).send({
      message: `No user exists with the id: ${id}`
    })
  }

  try {

    await user.destroy();

    return res.send({
      message: `User ${id} has been deleted successfully!`
    })

  } catch (error) {

    return res.status(500).send({
      message: `Error: ${error.message}`
    })

  }

}