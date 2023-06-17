import axios from "axios";
const SERVER_URI = process.env.SERVER_URI;

const signIn = async ({ email, password }) => {
  try {
    let response = await axios({
      url: `${SERVER_URI}/users/login`,
      method: "POST",
      data: {
        email,
        password,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    return null;
  } catch (e) {
    console.log("Error Occured while signing to the user's Account", e);
    return;
  }
};

const signUp = async ({ username, email, password }) => {
  try {
    let response = await axios({
      url: `${SERVER_URI}/users/login`,
      method: "POST",
      data: {
        email,
        password,
        username,
      },
    });

    if (response.status === 200) {
      return response.data;
    }

    return null;
  } catch (e) {
    console.log("Error Occured while creating a user's Account ", e);
  }
};

export default {
  signIn,
  signUp,
};
