//Login Action
export const loginStart = () => ({
    type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});

export const loginFailure = () => ({
    type: "LOGIN_FAILURE",
});

//Register Action
export const registerStart = () => ({
    type: "REGISTER_START",
});

export const registerSuccess = (user) => ({
    type: "REGISTER_SUCCESS",
    payload: user,
});

export const registerFailure = () => ({
    type: "REGISTER_FAILURE",
});

export const updateSuccess = (user) => ({
    type: "UPDATE_SUCCESS",
    payload: user,
});


//Logout Action
export const logout = () => ({
    type: "LOGOUT",
});
