

setCurrentUser() {
        this.authService.getCurrentUser()
        .then(user => this.user = user);
        console.log("I am running respons to login!", this.user);
}
    