const inquirer = require("inquirer");
const fs = require("fs");
const prompt = require("prompt");
const axios = require("axios");
const htmlgen = require("./generateHTML");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
let pdf = require('html-pdf');
let html = fs.readFileSync('./portfolio.html', 'utf8');

function promptUser(){
 return inquirer.prompt([
      {
        type: "list",
        name: "brColor",
        message: "What is your favorite color?",
        choices: ["red","blue", "green", "pink"]
      },
      {
        type: "input",
        name: "username",
        message: "Enter your GitHub username:"
      },
    ]).then(function({ username, brColor }){

        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function(res) {
   

            const gitUserName = res.data.login;
            const gitProfileImg = res.data.avatar_url;
            const userLoca = res.data.location;
            const userGitProfile = res.data.html_url;
            const userBlog = res.data.blog;
            const userBio = res.data.bio;
            const repoNum = res.data.public_repos;
            const followerNum = res.data.followers;
            const starsNum = res.data.following;
            const followingNum = res.data.following;

            console.log(gitUserName);
            console.log(gitProfileImg);
            console.log("https://www.google.com/maps/search/?api=1&query="+userLoca);
            console.log(userGitProfile);
            console.log("https://"+userBlog);
            console.log(userBio);
            console.log(repoNum);
            console.log(followerNum);
            console.log(starsNum);
            console.log(followingNum);

   
     console.log(brColor);
            fs.writeFile("portfolio.html", htmlgen(res, brColor), function(err) {
            
              if (err) {
                return console.log(err);
              }
            
              console.log("Successful!");

              pdf.create(html).toFile('./portfolio.pdf', function(err, res) {
                if (err) return console.log(err);
                console.log(res);
              })           
            
            })

        })
    })

}

promptUser();

