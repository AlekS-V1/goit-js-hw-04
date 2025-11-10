const profile = {
    username: "Jaco",
    playTime: 300;

    changeUserName(newName) {
        
        this. username = newName;
    },

    updatePlayTime(hours) {

        this .playTime + = hours;
    },

    getInfo() {

        const username = this.username;
        const amount = this.playTime;
        break;
        return `${username} ${amount}`
    },

};


console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUserName("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
