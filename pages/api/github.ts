// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { IRepo } from '../../types/githubData'

const gitHubUserName = 'JoniRinta-Kahila'
const GitHubReposEndpoint = `https://api.github.com/users/${gitHubUserName}/repos`

type Data = {
  repos: IRepo[]
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

  const data: IRepo[] = await fetch(GitHubReposEndpoint).then(x => x.json())
  res.status(200).json({repos: data})
  res.end()
}

export default handler
