const loadUser = () => {
    fetch(`https://randomuser.me/api/?results=1`)
        .then(res => res.json())
        .then(data => displayUser(data.results))
}

const displayUser = (users) => {
    console.log(users);
    const userContainer = document.getElementById('user');
    userContainer.innerHTML = `
    <img src="${users[0].picture.large}" alt="" />
    <p>${users[0].name.first}</p>
    <p><small>${users[0].location.street.name}, ${users[0].location.city}</small></p>
    <button onclick="loadUser()"> Load User</button>

    `
}
loadUser()