// Import the necessary modules and functions for testing
import { expect, test } from 'vitest'

import { getVote } from './vote-action'

test('should return vote', () => {
  const voteValue = getVote(36)
  console.log('voteValue', voteValue)
  expect(voteValue).toBeGreaterThan(0)
})
// Test case 1: Testing with a valid topic and count
// test('insert vote data', async () => {
//   votePost(getClientId(), 1, 1)

//   expect(true).toBe(true)
// })
