/* Code By Webdevtrick ( https://webdevtrick.com ) */
html, body {
    background-color: white;
    color:white;
    font-family: 'Staatliches', cursive;
pu width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}
.navbar-inverse .navbar-nav>.active>a, .navbar-inverse .navbar-nav>.active>a:focus, .navbar-inverse .navbar-nav>.active>a:hover {
  background-color: #ed5565;
}
h1 {
  padding-top: 10px;
  font-size: 10.0em;
}
h2 {
  font-size: 3.0em;
  color: white;
}
h3 {
  font-size: 2.5em;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: #ff2a4a;
}
.banner {
  background:url("https://webdevtrick.com/wp-content/uploads/1st.jpg");
  background-size: cover;
  height: 1000px;
}
#overlay {
  background: rgba(0, 0, 0, 0.76);
  height: 1000px;
}
.skills {
  background:url("https://webdevtrick.com/wp-content/uploads/coding.jpg");
  background-size: cover;
  min-height: 100%;
  padding-bottom: 40px;
  padding-top:40px;
}
.ex-timeline {
  background:url("https://webdevtrick.com/wp-content/uploads/black-background.jpg");
  background-size: cover;
  min-height: 100%;
  padding-top: 20px;
  padding-bottom: 60px;
}
.portfolios {
  padding-top: 5px;
  margin-top: -20px;
  background: #212121;
}
.title {
  padding-bottom: 10px;
  width: 1100px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
  top: 250px;
}
.titles {
  width: 790px;
  border-color: white;
  border-width: 5px;
  display: block;
  margin:0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
#title {
  font-size: 6.5em;
  padding-bottom: 15px;
}
 
#skills-label {
  font-size:5.0em;
  padding-bottom:30px;
}
.project-img {
  height: 500px;
  width: 450px;
}
#projectTitle {
  text-align: center;
  font-size: 2.8em;
  cursor: pointer;
  color: #212121;
}
.skill {
  background-color: white;
  color: #212121;
  font-size: 3rem;
  opacity: .8;
  padding: 15px;
  margin: 5px;
  border-radius: 15px;
  position: relative;
  display: inline-block;
}
.small-intro {
  background: #e8eaed;
  padding-top: 60px;
}
#small-intro {
  text-align: center;
  width: 50%;
  font-size: 2em;
  display:block;
  margin: 0 auto;
  color: #212121;
  padding-bottom: 60px;
}
.well {
  min-height: 300px;
}
.border {
  border-style: solid;
  border-width: 3px;
  border-color: #ff2a4a;
}
.resume {
  top: 280px;
  position: relative;
  font-size: 70%;
  width: 140px;
  display: inline-block;
  margin-left: 15px;
  cursor: pointer;
  padding-bottom: 8px;
}
.contact {
  top: 280px;
  position: relative;
  font-size: 70%;
  width: 140px;
  display: inline-block;
  cursor: pointer;
  padding-bottom: 8px;
}
#qualif {
  font-size: 3em;
  color:#ff2a4a;
}
footer {
  background-color: #ff2a4a;
  color: white;
  line-height: 20px;
  padding-top: 10px;
  padding-bottom: 5px;
  width: 100%;
  bottom: 0;
  position: relative;
  text-align: center;
}
.timeline {
  position: relative;
  max-width: 100%;
  list-style-type: none;
  margin: 0 auto;
  display: flex;
  left: 35%;
  padding-top: 2%;
}
.timeline:before {
  background: #1da1f2;
  content: '';
  position: absolute;
  top: 0;
  width: 5px;
  height: 100%;
  left: 10px;
}
.timeline-event {
  position: relative;
}
.timeline-event:hover .timeline-icon {
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  background-color: #1da1f2;
}
.timeline-event:hover .timeline-thumbnail {
  -moz-box-shadow: inset 40em 0 0 0 #ed5565;
  -webkit-box-shadow: inset 40em 0 0 0 #ed5565;
  box-shadow: inset 40em 0 0 0 #ed5565;
}
.timeline-event #workplace{
  transition: all .3s;
  -webkit-transition: all .3s;
  -moz-transition: all .3s;
  -ms-transition: all .3s;
  -o-transition: all .3s;
}
.timeline-event:hover  #workplace{
  color: #4f83f2;
}
.timeline-event-copy {
  left: 50px;
  padding: 32px 32px 0;
  position: relative;
  top: -32px;
  width: 100%;
}
.timeline-event-copy p:not(.timeline-thumbnail) {
  font-size: 14px;
  font-weight: 300;
  line-height: 24px;
  padding-bottom: 0px;
}
.timeline-icon {
  -moz-transition: -moz-transform 0.2s ease-in;
  -o-transition: -o-transform 0.2s ease-in;
  -webkit-transition: -webkit-transform 0.2s ease-in;
  transition: transform 0.2s ease-in;
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  background-color: white;
  outline: 10px solid #ed5565;
  display: block;
  margin: 8px 8px 8px -8px;
  position: absolute;
  top: 0;
  left: 32px;
  width: 16px;
  height: 16px;
}
.timeline-thumbnail {
  -moz-transition: box-shadow 0.5s ease-in 0.1s;
  -o-transition: box-shadow 0.5s ease-in 0.1s;
  -webkit-transition: box-shadow 0.5s ease-in;
  transition: box-shadow 0.5s ease-in 0.1s;
  -moz-box-shadow: inset 0 0 0 0em #1da1f2;
  -webkit-box-shadow: inset 0 0 0 0em #1da1f2;
  box-shadow: inset 0 0 0 0em #1da1f2;
  background: none repeat scroll 0 0 #ed5565;
  box-shadow: 0 0 0 0 #1da1f2 inset;
  color: #fff;
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 10px;
  padding: 8px 15px;
  transition: box-shadow 0.5s ease-in 0.1s;
}
#workplace {
  font-size: 38px;
}
#jobPos {
  font-size: 25px;
}
#jobDesc {
  font-size: 20px;
  width: 50%;
}
#liveDemo {
  text-align: center;
  font-size: 2em;
  cursor: pointer;
  display: inline;
  padding-right: 10%;
  padding-left: 20%;
  color: #002b80;
}
#sourceCode {
  text-align: center;
  font-size: 2em;
  cursor: pointer;
  display: inline;
  color: #002b80;
}
.contact-section {
  background-color: #333;
  background-size: cover;
  height: 350px;
  padding-top: 20px;
}
.contact-buttons {
  display: block;
  width: 100%;
  bottom: 0;
  position: relative;
  text-align: center;
}
.btn-linkedin {
  background: #0E76A8;
  border-radius: 10px;
  color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #084461;
}
.btn-drible {
    background: #e64786;
    border-radius: 10px;
    color: white;
    border-width: 1px;
    border-style: solid;
  border-color: #084461;
}
.btn-github {
    background-color: #24292e;
    border-radius: 10px;
    color: white;
    border-width: 1px;
    border-style: solid;
  border-color: #084461;
}
.btn-email {
    background-color: #141f1f;
    border-radius: 10px;
    color: white;
    border-width: 1px;
    border-style: solid;
  border-color: #084461;
}
.btn-facebook {
    background-color: #4267b2;
    border-radius: 10px;
    color: white;
    border-width: 1px;
    border-style: solid;
  border-color: #084461;
}
@media (min-width:1400px)   {
  .banner, .skills, .ex-timeline, .portfolios, .contact-section {
     background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
   }
}
@media (max-width: 800px) and (min-width: 300px) {
  img {
    width: 30vw;
    height: 30vh;
  }
  h1 {
    font-size: 12vw;
  }
  h2 {
    font-size: 8vw;
  }
  h3 {
    font-size: 6vw;
  }
  p {
    font-size: 6vw;
  }
  .skill {
    font-size: 5vw;
  }
  ul {
    font-size: 4.5vw;
    width: 80%;
  }
  #skills-label {
    font-size: 13vw;
  }
  .banner {
    background-size: 100% 100%;
    height: 550px;
  }
  .title {
    padding-bottom: 10px;
    width: 90%;
    top: 100px;
  }
  .border {
    width: 25%;
    border-width: 2px;
  }
  .resume,.contact {
    top: 110px;
    position: relative;
    padding-bottom: 10px;
  }
  .small-intro {
    padding-top: 40px;
  }
  #small-intro {
    width: 80%;
    font-size: 5vw;
    padding-bottom: 40px;
  }
  #borderText {
    font-size: 5.5vw;
  }
  #qualif {
    font-size: 6.5vw;
  }
  .titles {
    width: 85%;
  }
  #title {
    padding-bottom: 15px;
    font-size: 12vw;
  }
  #skills-label {
    font-size: 10vw;
    padding-bottom: 10px;
  }
  #footer {
    font-size: 3vw;
  }
  .timeline {
    left: 0;
  }
  .timeline-thumbnail {
    font-size: 3.5vw;
  }
  .timeline:before {
    width: 2px;
  }
  #workplace {
    font-size: 8vw;
  }
  #jobPos {
    font-size: 6vw;
  }
  #jobDesc {
    font-size: 5vw;
    width: 100%;
  }
  #liveDemo {
    padding-left: 5%;
    padding-right: 14%;
    font-size: 5.5vw;
  }
  #sourceCode {
    font-size: 5.5vw;
  }
  .view {
    font-size: 5.5vw;
  }
}