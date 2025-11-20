# Orange Radio Static Screens for Back Office

## Introduction

These screens provide the HTML/CSS (with some javascript functionality) for the validated designs.

The UI is based closely on the [Boosted](https://boosted.orange.com/) Orange branded version of Bootstrap.

## Screens

There is some very limited build tooling required and the built screens are located in the `/docs` directory which is also published to Github Pages.

They can be [viewed online from an index screen here](http://chrism.github.io/orange-radio-cms-static/)

Alternatively these are links to the individual screens and their current progress

- [x] [Sign In](http://chrism.github.io/orange-radio-cms-static/sign_in.html)
- [x] Radios
  - [x] [Default](http://chrism.github.io/orange-radio-cms-static/radios.html)
  - [x] [Searching for "france"](http://chrism.github.io/orange-radio-cms-static/radios_france.html)
- [x] Create a radio
  - [x] [Default](http://chrism.github.io/orange-radio-cms-static/create_radio.html)
  - [x] [Completed](http://chrism.github.io/orange-radio-cms-static/create_radio_completed.html)
  - [x] [Error](http://chrism.github.io/orange-radio-cms-static/create_radio_error.html)
  - [x] [Streams modal](http://chrism.github.io/orange-radio-cms-static/create_radio_streams_modal.html)
  - [x] [Genres modal](http://chrism.github.io/orange-radio-cms-static/create_radio_genres_modal.html)
  - [x] [Locations modal](http://chrism.github.io/orange-radio-cms-static/create_radio_locations_modal.html)

## Build Tooling

[Parcel](https://parceljs.org/) is used following the [recommended Boosted guidelines](https://boosted.orange.com/docs/5.0/getting-started/parcel/).

Additionally, [PostHTML Include](https://github.com/posthtml/posthtml-include) and [PostHTML Expressions](https://github.com/posthtml/posthtml-expressions) are used, but only to reduce the amount of repetition in the templates.

## Custom CSS

Any CSS which isn't included directly as part of Boosted is located in the `/custom.scss` file.

## Using as a reference

My recommendation would be to take the HTML where possible from the source files `/src` as they are the original code without any pre-processing.

## Installation

If you want to run this locally assuming you have [NPM](https://www.npmjs.com/) and [Parcel](https://parceljs.org/) installed already it should be as straightforward as

```
git clone git@github.com:chrism/orange-radio-cms-static.git
cd orange-radio-cms-static
npm install
```

Then to run the development server

```
npm run dev
```

And to build the final version to `/docs`

```
npm run build
```
