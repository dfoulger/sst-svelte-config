# sst-svelte-config

Example of using SST Secrets with SvelteKit

# Usage
## Store the secret
`npx sst secrets set TEST_SECRET "not a secret anymore"`

## Confirm the secret stored properly
`npx sst secrets get TEST_SECRET`

`npx sst secrets list`

## Test that it works in the SvelteKit app
First
`npx sst dev`

Then
`npm run dev`

Hit the url that comes out and the secret should be revealed