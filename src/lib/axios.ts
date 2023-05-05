import axios from 'axios'

export const apiUsers = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const apiSearch = axios.create({
  baseURL: 'https://api.github.com/search/issues',
})

export const apiIssue = axios.create({
  baseURL: 'https://api.github.com/repos/lucas-araujo15/github_blog/issues',
})
