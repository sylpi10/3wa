const login = (email, password, callback) => {
	setTimeout(() => {
        callback(email);
	}, 1000);
    
};

function doSmtWithMail(verifiedMail) {
    console.log(verifiedMail);
}

login("me@mail.fr", 123456, doSmtWithMail);