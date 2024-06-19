// Import the necessary modules and functions for testing
import { expect, test } from 'vitest'

import { getClientId, getVote, updateVote } from './vote-action'

test('New client vote', async () => {
  const clientId = getClientId()
  const voteData = await updateVote(clientId, 36, 1)
  expect(voteData?.value).toBeGreaterThan(0)
})

test('Existing client vote', async () => {
  const clientId = 'd464b9a4-8e90-4ee3-a1bb-5e011cabc408'
  const voteData = await updateVote(clientId, 36, 1)
  expect(voteData?.value).toBeGreaterThan(0)
})

test('should return vote', async () => {
  const voteValue = await getVote(36)
  expect(voteValue).toBeGreaterThan(0)
})
