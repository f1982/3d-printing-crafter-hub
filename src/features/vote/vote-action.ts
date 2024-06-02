import { v4 as uuidv4 } from 'uuid'

import prisma from '@/lib/prisma-client'

export function getClientId() {
  let clientId = localStorage.getItem('voteClientId')
  if (!clientId) {
    clientId = uuidv4()
    localStorage.setItem('voteClientId', clientId!)
  }
  return clientId
}

export async function getVote(postId: number) {
  console.log('getVote')
  const data = await prisma.vote.findMany({
    where: {
      postId: postId,
    },
    select: {
      value: true,
    },
  })
  console.log('data', data)
  return data.reduce((accumulator, v) => accumulator + v.value, 0)
}

export async function updateVote(
  clientId: string,
  postId: number,
  value: number,
) {
  try {
    const existingVote = await prisma.vote.findFirst({
      where: {
        clientId: clientId,
        postId: postId,
      },
    })
    console.log('existingVote', existingVote)

    if (existingVote) {
      console.log('new number:', value + existingVote.value)
      const voteValue = value + existingVote.value
      await prisma.vote.update({
        where: {
          id: existingVote.id,
        },
        data: {
          value: voteValue,
        },
      })
      return null
    }

    const vote = await prisma.vote.create({
      data: {
        value: value,
        clientId: clientId,
        post: {
          connect: { id: postId },
        },
      },
    })

    return vote
  } catch (e) {
    console.log('e: ', e)
  }
}
