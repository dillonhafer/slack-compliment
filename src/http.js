import {
  capitalize,
  randomIndex,
  sandwich,
} from './generator';

import compliments from './compliments';
import criticisms  from './criticisms';

const generateCriticism = () => {
  return criticisms[randomIndex(criticisms.length)];
}

export const newAuthorizedRequest = (token, requestFunction) => {
  return (request, response) => {
    if (request.body.token !== token) {
      response.status(404).send('Access Forbidden');
    }

    requestFunction(request, response);
  }
}

export const postSandwich = (request, response) => {
  const firstIndex = randomIndex(compliments.length);
  const lastIndex  = randomIndex(compliments.length, firstIndex);

  const openingCompliment = capitalize(compliments[firstIndex]);
  const closingCompliment = compliments[lastIndex];

  const text = sandwich(openingCompliment, generateCriticism(), closingCompliment);
  response.send({text});
}
