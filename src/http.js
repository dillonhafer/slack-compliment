import {
  capitalize,
  randomIndex,
  sandwich,
} from './generator';

import compliments from './compliments';
import criticisms  from './criticisms';

const authorizedRequest = (token, requestFunction) => {
  return function(request, response) {
    if (request.body.token !== token) {
      response.status(404).send('Access Forbidden');
    }

    requestFunction(request, response);
  }
}

const generateCriticism = () => {
  return criticisms[randomIndex(criticisms.length)];
}

export const postSandwich = (token) => {
  return authorizedRequest(token, (request, response) => {
    const firstIndex = randomIndex(compliments.length);
    const lastIndex  = randomIndex(compliments.length, firstIndex);

    const openingCompliment = capitalize(compliments[firstIndex]);
    const closingCompliment = compliments[lastIndex];

    const text = sandwich(openingCompliment, generateCriticism(), closingCompliment);
    response.send({text});
  });
}
