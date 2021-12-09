const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// TEST
// for (let i = 0; i < team.length; i++) {
//   console.log(team[i]);
//   for (const key in team[i]) {
//     console.log(team[i][key]);
//   }
//   console.log('==========');
// }

// crea card con image, name e ruole
function createCard(element, container) {
  container.innerHTML += `
      <div class="team-card">
        <div class="card-image">
          <img
            src="img/${element.image}"
            alt="${element.name}"
          />
        </div>
        <div class="card-text">
          <h3>${element.name}</h3>
          <p>${element.role}</p>
        </div>
      </div>
    `;
}
//acquisisco il contenitore delle card
const teamContainer = document.querySelector('.team-container');
//devo inserire tutte le card presenti nel mio array team
for (let index = 0; index < team.length; index++) {
  const member = team [index];
  // console.log(member);
  // console.log(member.image);
  // aggiunge card con informazioni relativo a membro i-esimo
  createCard(member,teamContainer);
  // teamContainer.innerHTML += `
  // <div class="team-card">
  //   <div class="card-image">
  //     <img
  //       src="img/${member.image}"
  //       alt="${member.name}"
  //     />
  //   </div>
  //   <div class="card-text">
  //     <h3>${member.name}</h3>
  //     <p>${member.role}</p>
  //   </div>
  // </div>
  // `;
}
