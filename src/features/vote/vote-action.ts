import { v4 as uuidv4 } from 'uuid'

import prisma from '@/lib/prisma-client'

function getClientId() {
  let clientId = localStorage.getItem('voteClientId')
  if (!clientId) {
    clientId = uuidv4()
    localStorage.setItem('voteClientId', clientId!)
  }
  return clientId
}

async function votePost(clientId: string, postId: number, value: number) {
  if (!clientId) {
    throw new Error('Client ID is required')
  }
  const existingVote = await prisma.vote.findFirst({
    where: {
      clientId: clientId,
      postId: postId,
    },
  })

  if (existingVote) {
    throw new Error('User has already voted on this post')
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
}
