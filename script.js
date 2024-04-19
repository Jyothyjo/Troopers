const teamMembers = [
    { name: "Polwin Davis", title: "Captain", image: "a.jpg" },
    { name: "Nandana U", title: "Vice Captain", image: "b.jpg" },
    { name: "Jyothy P R", image: "c.jpg" },
    { name: "Nova Steby", image: "d.jpg" },
    { name: "Sreekutten P S", image: "e.jpg" },
    { name: "Justin Mathew", image: "f.jpg" },
    { name: "Mohammed Shibil K", image: "g.jpg" },
    { name: "Roshni Genome", image: "h.jpg" },
];

const teamMembersContainer = document.getElementById('team-members');

teamMembers.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.classList.add('team-member');
    memberDiv.innerHTML = `
        <div class="member-info">
            <img src="${member.image}" alt="${member.name}" style="width: 150px; height: auto;">
            <h3 style="text-align: center;">${member.name}</h3>
            ${member.title ? `<p style="text-align: center; margin-top: 5px;">${member.title}</p>` : ''}
        </div>
    `;
    teamMembersContainer.appendChild(memberDiv);
});
