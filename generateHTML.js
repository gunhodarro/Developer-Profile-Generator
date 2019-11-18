const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(data, userColor) {
  return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>Document</title>

        <style>
            @page {
              margin: 0;
            }
           *,
           *::after,
           *::before {
           box-sizing: border-box;
           }
           html, body {
           padding: 0;
           margin: 0;
           }
           html, body, .wrapper {
           height: 100%;
           }
           .wrapper {
           background-color: gray;
           padding-top: 100px;
           }
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Cabin', sans-serif;
           }

           main {
           background-color: #E9EDEE;
           height: ;
           border:1px solid black;
           padding-top: 30px;
           width:800px;
           margin:0 auto;
           text-align: center;
           }

           h1, h2, h3, h4, h5, h6 {
           font-family: 'BioRhyme', serif;
           margin: 0;
           }
           h1 {
           font-size: 3em;
           }
           h2 {
           font-size: 2.5em;
           }
           h3 {
           font-size: 2em;
           }
           h4 {
           font-size: 1.5em;
           }
           h5 {
           font-size: 1.3em;
           }
           h6 {
           font-size: 1.2em;
           }
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: -50px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${colors[userColor].headerBackground};
           color: ${colors[userColor].headerColor};
           padding: 10px;
           width: 95%;
           border-radius: 6px;
           }
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           border: 6px solid ${colors[userColor].photoBorderColor};
           box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
           }
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           .photo-header h1 {
           margin-top: 10px;
           }
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 1.1em;
           }
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           .workExp-date {
           font-style: italic;
           font-size: .7em;
           text-align: right;
           margin-top: 10px;
           }
           .container {
           padding: 50px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
             display: flex;
             flex-wrap: wrap;
             justify-content: space-between;
             margin-top: 20px;
             margin-bottom: 20px;
           }
  
           .card {
             padding: 20px;
             border-radius: 6px;
             background-color: ${colors[userColor].headerBackground};
             color: ${colors[userColor].headerColor};
             margin: 20px;
             text-align:center;
           }

           .box {
               width:300px;
               display: inline-block;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
<body>

    <div class="wrapper">

        <div class="container">
            
            <main>
                
                <div class="photo-header card photo-header h1 phot-header h2">

                    <img class="photo-header img" src="${data.data.avatar_url}" alt="">
                    <div style="display: inline-block;">
                            <h3>Hi!</h3><br> 
                            <h4>My name is ${data.data.name}</h4>
                            <br>
                            <div class="links-nav nav-link">
                                <a href="https://www.google.com/maps/search/?api=1&query=${data.data.location}">${data.data.location}</a>
                                <a href="${data.data.html_url}">GitHub</a>
                                <a href="${data.data.blog}"Blog</a>
                                
                            </div>
                        </div>
                </div>

                <h4>Bio: ${data.data.bio}</h4>
        

                    <div class="card box" >
                        <h5>Public Repositories:</h5>
                        <br><h6>${data.data.public_repos}</h6>
                    </div>
                    
                    <div class="card box">
                    <h5>Followers:</h5>
                    <br><h6>${data.data.followers}</h6>
                </div>
                <br>
               

                    <div class="card box">
                        <h5>GitHub Stars:</h5>
                        <br><h6>${data.data.followers}</h6>
                    </div>
                    
                    <div class="card box">
                        <h5>Following:</h5>
                        <br><h6>${data.data.following}</h6>
                    </div>
                    
                

                </div>
            </main>
            
        </div>

    </div>

</body>`}

module.exports = generateHTML;