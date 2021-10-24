function getGithubProfileInfo(user) {
  url = `https://api.github.com/users/${user}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
      userLogin.textContent = data.login
      pageTitle.textContent = `${data.name} - DoWhile 2021`
    })
}

getGithubProfileInfo('italoandre')