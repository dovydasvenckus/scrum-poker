import React from 'react';

const customDisplayMap = {
  '0.5': '1/2',
  'coffee': React.createElement('img', {'src': '../coffee.svg'}, null),
  'kebab': React.createElement('img', {'src': '../kebab.svg'}, null)
} 

export const resolveDisplayValue = (value) => {
  return customDisplayMap[value] ? customDisplayMap[value] : value;
}
