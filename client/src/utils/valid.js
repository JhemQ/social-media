const valid = ({fullname, username, email, password, cf_password}) => {
    const err = {}

    if(!fullname) {
        err.fullname = "Please add your full name."
    }else if(fullname.length > 50){
        err.fullname = "Full name is up to 50 characters long."
    }

    if(!username) {
        err.username = "Please add your username."
    }else if(username.replace(/ /g, '').length > 15){
        err.username = "Username is up to 15 characters long."
    }else if(username.replace(/ /g, '').length < 5){
        err.username = "Username is must be atleast 5 characters."
    }

    if(!email) {
        err.email = "Please add your email."
    }else if(!validateEmail(email)){
        err.email = "Email format is incorrect."
    }

    if(!password) {
        err.password = "Please add your password."
    }else if(password.length < 6){
        err.password = "Password must be at least 6 characters."
    }else if(!validatePassword(password)){
        err.password = "Password must have a lowercase, uppercase, number and special character"
    }

    if(password !== cf_password) {
        err.cf_password = "Confirm password did not match."
    }

    return {
        errMsg: err,
        errLength: Object.keys(err).length
    }
}

function validatePassword(password) {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,}$/
    return regex.test(password);
}

function validateEmail(email) {
    // eslint-disable-next-line
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
  
export default valid