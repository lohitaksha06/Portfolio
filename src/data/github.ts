/**
 * The GitHub identity shown above the contribution graph. Counts are a
 * snapshot; the contribution calendar lives in contributions.json and is
 * refreshed with `npm run contributions`.
 */
export interface GithubAccount {
  login: string
  url: string
  publicRepos: number
  followers: number
}

export const githubAccounts: GithubAccount[] = [
  {
    login: 'lohitaksha06',
    url: 'https://github.com/lohitaksha06',
    publicRepos: 19,
    followers: 17,
  },
  {
    login: 'Einheit-Zenkai',
    url: 'https://github.com/Einheit-Zenkai',
    publicRepos: 4,
    followers: 2,
  },
  {
    login: 'coding-royale',
    url: 'https://github.com/coding-royale',
    publicRepos: 1,
    followers: 0,
  },
]

export const githubProfile = {
  login: 'lohitaksha06',
  url: 'https://github.com/lohitaksha06',
  avatar: 'https://github.com/lohitaksha06.png',
  totalRepos: githubAccounts.reduce((sum, a) => sum + a.publicRepos, 0),
  totalFollowers: githubAccounts.reduce((sum, a) => sum + a.followers, 0),
}

export default githubProfile
