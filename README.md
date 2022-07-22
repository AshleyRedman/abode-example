right so...

this is an implementation of react abode.

Each top level 'block' is its own self contained package, what does this mean....?
Well, it means it produces its own bundle, so the bundles can be referenced for 'code splitting' purposes.

Why is this good? Well, we can generate a new 'block' from a tool like plop etc etc but it also means you can run the watcher on one small file in dev
so the watch is much much faster as devs generally develop on one component at a time, though nothing stopping you from watching multiple files...

This supports TS also, it was a pain & adds a LOT of other boiler plate, but its worth it.

To get started...

Ensure docker is running...

from the root dir, run `docker compose up`

for the purposes of this demo this will start up a php server, take a look in `index.php`

then in a new terminal, go into `/src` & `npm i`

then run `npm run tw:prod` <- simply just to bundle out a nice tailwind css

then go into `/src/blocks/Text` and run `npm i && npm run prod`

There are dev & watching options also...

Go to `localhost:8080` and ta da...

There is a timeout so watch the screen for 2 seconds... checkout `Text.tsx`
