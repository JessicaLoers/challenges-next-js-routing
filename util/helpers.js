const coachies = [
  {
    name: 'Andrea',
    favorite: '🤿',
  },
  {
    name: 'Jessica',
    favorite: '🎨',
  },
  {
    name: 'Michael',
    favorite: '☕️',
  },
];

function getAllTeamMembers() {
  return coachies;
}

function getMemberByName(name) {
  const member = coachies.find((coach) => {
    return coach.name === name;
  });
  return member;
}

export default coachies;
export { getAllTeamMembers, getMemberByName };
