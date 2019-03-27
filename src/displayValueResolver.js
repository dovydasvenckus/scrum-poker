const customDisplayMap = {
  '0.5': '1/2',
  'coffee': "☕"
} 

export const resolveDisplayValue = (value) => {
  return customDisplayMap[value] ? customDisplayMap[value] : value;
}
