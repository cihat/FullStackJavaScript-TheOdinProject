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
      reject("Arkadaşlar listesine ulaşılmadı");
    }, 1500);
  });
};


async function asenkronAkıs() {
  try {
    const user = await getUser();
    const friends = await getFriends(user.id);
    console.log('veriler', { user, friends });
  }
  catch (error) {
    console.log(error);
  }
}
asenkronAkıs();