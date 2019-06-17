//run npm install -g json-server
// run json-server --watch db.json

/* src/index.js */
document.addEventListener('DOMContentLoaded', () => {
  const endPoint = 'http://localhost:3000/api/v1/users';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => console.log(json));

    
});
