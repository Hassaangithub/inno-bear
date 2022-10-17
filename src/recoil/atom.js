import {atom} from 'recoil';

export const challengeAtom = atom({
  key: 'createChallenge',
  default: {},
});


export const challengeId = atom({
  key: 'challengeId',
  default: '',
});


export const currentChallenge = atom({
  key: 'currentChallenge',
  default: {},
});