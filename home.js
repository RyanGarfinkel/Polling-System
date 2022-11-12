const createBtn = document.getElementById('create-poll')
const joinBtn = document.getElementById('join-poll')

createBtn.addEventListener('click', () =>
{
    alert('Create Works!')
});

joinBtn.addEventListener('click', () =>
{
    document.location.href = 'join.html'
});