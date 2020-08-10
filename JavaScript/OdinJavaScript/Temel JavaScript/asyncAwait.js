const user = { id: 10, name: "Cihat" };
const friends = [{ id: 11, name: 'Murat' }, { id: 12, name: 'Kenan' }]

const getUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user);
    }, 1500);
  })
}
const getFriends = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(friends);
    }, 1500);
  });
};
/* 
//callback hell
let userId;
getUser().then(function (user) {
  userId = user.id;
  getFriends(userId).then(function (friends) {
    console.log(user);
    console.log(friends);
  })
}) 
*/
/* 
//promise chain
getUser().then((user) => {
  console.log(user);
  return getFriends(user.id);
}).then((friends) => {
  console.log(friends);
}) */

//async await function
//async await yapısında herhangi bir satırın işleyişi bitmeden bir 
//sonraki satıra kesinlikle geçmez.
async function asenkronAkıs() {
  const user = await getUser();
  const friends = await getFriends(user.id);
  console.log('veriler', { user, friends });
}
asenkronAkıs();