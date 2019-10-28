import {login, logOut, logout} from "../../actions/auth";

test ("should logout action object", () => {
    const action = logout();
    expect(action).toEqual({
        type: "LOGOUT"
    });
});

test ("should login action object", () => {
    const uid = "abc123";
    const action = login(uid);
    expect(action).toEqual({
        type: "LOGIN",
        uid 
    }); 
});