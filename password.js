let password = 'Password1234@'


if(password.length >= 10 && /\d/.test(password) && /[a-zA-Z]/ && /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password) && !/\s/.test(password)) {
    console.log('Success!');
} else {
    console.log("Password does not meet requirements.")
}

/* 
Checks that password is at least 10 characters long.
Checks for at least one letter and one number.
Checks for special characters.
Checks to make sure there are no spaces.
*/