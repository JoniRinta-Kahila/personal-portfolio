// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const gitHubUserName = 'JoniRinta-Kahila';
const GitHubReposEndpoint = `https://api.github.com/users/${gitHubUserName}/repos`;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const data = await fetch(GitHubReposEndpoint).then(x => x.json())
  res.status(200).send(data)
  res.end()
}

export default handler
