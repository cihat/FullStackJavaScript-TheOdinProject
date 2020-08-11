const isLogin = ((req, res, next) => {
  const isLogin = false;
  if (isLogin) {
    next();
  }
  else {
    res.send("Lutfen Giris Yapin...")
  }
})

module.exports = isLogin;