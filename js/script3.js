const loadUserData = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayUserInfo(data.results[0]))
}
const displayUserInfo = (userDatas) => {
    const userDiv = document.getElementById('userDiv');
    console.log(userDatas)
    const div = document.createElement('div');
    div.classList.add('userDataClass');
    div.innerHTML = `
      <img src="${userDatas.picture.large}" alt="">
      <h4> Name:  ${userDatas.name.first} ${userDatas.name.last} </h4>
      <div> 
          <p>Country: ${userDatas.location.country} </p>
          <p>City: ${userDatas.location.city}
          <p> Street:  ${userDatas.location.street.name} ${userDatas.location.street.number}</p>

          <p>Coordinates :
           ${userDatas.location.coordinates.latitude},
           ${userDatas.location.coordinates.longitude}</p>
         
          <p>Timezone : 
          ${userDatas.location.timezone.offset},
          ${userDatas.location.timezone.description}</p>
      </div>
    `
    userDiv.appendChild(div)
}
