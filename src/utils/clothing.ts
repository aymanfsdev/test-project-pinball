import { IClothingInfo } from '../types/services/employees.types';

type GroupedClothing = {
  [key: string]: IClothingInfo[];
};

function groupClothinByType(data: IClothingInfo[]) {
  const grouped: GroupedClothing = {};
  data.forEach((item) => {
    if (!grouped[item.type.name]) {
      grouped[item.type.name] = [];
    }
    grouped[item.type.name].push(item);
  });
  return grouped;
}

export { groupClothinByType };