let User = function(data){
  this.data = data
  this.errors = []
}

User.prototype.validate = function(){
    if( this.data.username == ""){
        this.errors.push("You must provide a username")
    }
    if( this.data.email == ""){
        this.errors.push("You must provide an email")
    }
    if( this.data.password == ""){
        this.errors.push("You must provide a password")
    }
    if( this.data.password.length < 6){
        this.errors.push("Password mush contain at least 6 characters")
    }
}

User.prototype.register = function(){
    // 1. Validate user data
    this.validate();
    // 2. Only if there are no validation errors 
    // save user data to database


}

module.exports = User;