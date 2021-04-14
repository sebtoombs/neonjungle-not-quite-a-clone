# Welcome to my not-quite-a-clone of neonjungle.studio

This is just a quick (extremely cut-down) demo to show how I _might_ go about building a site in a similar manner to that used by Neon Jungle.

- I didn't replicate the background hover effect
- I've included the built files in the repo so you don't have to build if you so desire
- CSS is BEM with a few cheeky utilities thrown in.
- A sprinkling of JS for the nav + scrollama

# Run it

1. Clone the repo

`git clone https://github.com/sebtoombs/neonjungle-not-quite-a-clone`

2. Install dependencies

`cd neonjungle-not-quite-a-clone`

`yarn install`

3. Run dev server

`yarn start`

4. Open in browser

http://localhost:8080

# Issues

For the curious, I did discover a couple of little SEO/a11y/semantic issues with the Neon Jungle site in my travels. Nothing huge, and definitely a non-exhaustive list.

- .l-site-header--inner h1 is visually hidden. Google will most likely penalise this.
- .l-site-header--logo is an `<a/>` (anchor) not a button - this is non-optimal for a11y
- .l-page has all the scrollable (body) content. Whilst not an issue per-se, this usually leads to complications, and it can be done without it
