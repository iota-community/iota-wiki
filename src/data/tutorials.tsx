/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 * ADD YOUR TUTORIAL TO THE WIKI:
 *
 * Requirements for adding your tutorial to the Wiki:
 * - TODO
 *
 * Instructions:
 * - Add your repo in the json array below
 * - Add a image preview
 * - Use relevant tags to qualify your tutorial (read the tag descriptions below)
 * - The image MUST be added to the GitHub repository, and use `require("img")`
 * - The image has to have minimum width 640 and an aspect of no wider than 2:1
 * - Open a PR and check for reported CI errors
 *
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your tutorials.tsx edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/iota-wiki/tree/<branch>/src/data/tutorials
 * - Drag-and-drop an image here to add it to your existing PR
 *
 */

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'scam'
  | 'catlover'
  | 'silkysmoth'
  | 'meme'
  | 'video'
  | 'livecoding'
  | 'text'
  | 'identity'
  | 'gettingstarted'
  | 'integrationservices'
  | 'nft'
  | 'supply_chain'
  | 'identity'
  | 'streams'
  | 'wallet'
  | 'client'
  | 'stronghold'
  | 'iscp'
  | 'rust'
  | 'wasm'
  | 'python'
  | 'java'
  | 'node_js'
  | 'c'
  | 'go';

export type Tutorial = {
  title: string;
  description: string;
  preview: string;
  website: string;
  source: string | null;
  tags: TagType[];
};

const colors: string[] = [
  '#010067',
  '#d5ff00',
  '#ff0056',
  '#9e008e',
  '#0e4ca1',
  '#ffe502',
  '#005f39',
  '#00ff00',
  '#95003a',
  '#ff937e',
  '#a42400',
  '#001544',
  '#91d0cb',
  '#620e00',
  '#6b6882',
  '#0000ff',
  '#007db5',
  '#6a826c',
  '#00ae7e',
  '#c28c9f',
  '#be9970',
  '#008f9c',
  '#5fad4e',
  '#ff0000',
  '#ff00f6',
  '#ff029d',
  '#683d3b',
  '#ff74a3',
  '#968ae8',
  '#98ff52',
  '#a75740',
  '#01fffe',
  '#ffeee8',
  '#fe8900',
  '#bdc6ff',
  '#01d0ff',
  '#bb8800',
  '#7544b1',
  '#a5ffd2',
  '#ffa6fe',
  '#774d00',
  '#7a4782',
  '#263400',
  '#004754',
  '#43002c',
  '#b500ff',
  '#ffb167',
  '#ffdb66',
  '#90fb92',
  '#7e2dd2',
  '#bdd393',
  '#e56ffe',
  '#deff74',
  '#00ff78',
  '#009bff',
  '#006401',
  '#0076ff',
  '#85a900',
  '#00b917',
  '#788231',
  '#00ffc6',
  '#ff6e41',
  '#e85ebe',
];

// LIST OF AVAILABLE TAGS
// Available tags to assign to your tutorial
// Please choose all tags that you think might apply.
// We'll remove inappropriate tags, but it's less likely that we add tags.
// Colors for the tags are used from the 64 colors set here: http://godsnotwheregodsnot.blogspot.com/2012/09/color-distribution-methodology.html
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose tutorials to add to favorites
  favorite: {
    label: 'Favorite',
    description:
      'Our favorite IOTA tutorials that you must absolutely check-out!',
    color: colors[0],
  },

  gettingstarted: {
    label: 'Getting Started',
    description: 'Easy Tutorials for getting started',
    color: colors[1],
  },

  video: {
    label: 'Video Tutorial',
    description: 'Tutorial in video format',
    color: colors[2],
  },

  text: {
    label: 'Text Tutorial',
    description: 'Tutorial in written format',
    color: colors[3],
  },

  livecoding: {
    label: 'Live Coding Session',
    description: 'Recorded live coding session',
    color: colors[4],
  },

  integrationservices: {
    label: 'IOTA Integration Services',
    description: 'Integrate IOTA seamlessly',
    color: colors[5],
  },

  scam: {
    label: 'Scam',
    description: 'This seems fishy',
    color: colors[7],
  },

  catlover: {
    label: 'Cat-Lover',
    description: 'We love Cats(not the movie)!',
    color: colors[8],
  },

  silkysmoth: {
    label: 'Silky Smoth',
    description: 'Only one person can make hair silky smoth',
    color: colors[9],
  },

  meme: {
    label: 'Meme',
    description: "That's what we are here for, right?",
    color: colors[10],
  },

  identity: {
    label: 'IOTA Identity',
    description: 'This Tutorial is using the IOTA Identity framework',
    color: colors[6],
  },

  nft: {
    label: 'NFT',
    description: 'This Tutorial is related to non-fungible token(NFT)',
    color: colors[7],
  },

  supply_chain: {
    label: 'Supply chain',
    description: 'This Tutorial is related to supply chain',
    color: colors[8],
  },

  streams: {
    label: 'IOTA Streams',
    description: 'This Tutorial is using the IOTA Streams framework',
    color: colors[9],
  },

  wallet: {
    label: 'IOTA Wallet',
    description: 'This Tutorial is using the IOTA Wallet framework',
    color: colors[10],
  },

  client: {
    label: 'IOTA Client',
    description: 'This Tutorial is using the IOTA Client framework',
    color: colors[11],
  },

  stronghold: {
    label: 'IOTA Stronghold',
    description: 'This Tutorial is using the IOTA Stronghold framework',
    color: colors[12],
  },

  iscp: {
    label: 'IOTA ISCP',
    description: 'This Tutorial is using the IOTA Smart Contract framework',
    color: colors[13],
  },

  rust: {
    label: 'Rust',
    description: 'This Tutorial is using the Rust programming language',
    color: colors[14],
  },

  wasm: {
    label: 'Wasm',
    description: 'This Tutorial is using the Wasm programming language',
    color: colors[14],
  },

  python: {
    label: 'Python',
    description: 'This Tutorial is using the Python programming language',
    color: colors[15],
  },

  java: {
    label: 'Java',
    description: 'This Tutorial is using the Java programming language',
    color: colors[16],
  },

  node_js: {
    label: 'Node.js',
    description: 'This Tutorial is using the Node.js programming language',
    color: colors[17],
  },

  c: {
    label: 'C',
    description: 'This Tutorial is using the C programming language',
    color: colors[18],
  },

  go: {
    label: 'Go',
    description: 'This Tutorial is using the Go programming language',
    color: colors[19],
  },
};

export const TagList = Object.keys(Tags) as TagType[];
