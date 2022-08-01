export const determineIsStandard = (cardSet: string) => (
  cardSet === 'Murder at Castle Nathria' || cardSet === 'Voyage to the Sunken City' || cardSet === 'Fractured in Alterac Valley' || cardSet === 'United in Stormwind' || cardSet === 'Forged in the Barrens' || cardSet === 'Core'
);

export const makeStringUrlReadable = (stringToProcess: string) => (
  stringToProcess.replaceAll(' ', '%20')
);

export const filterByCategory = (listToFilter: CardObject[], category: keyof CardObject, filterTerm: string) => (
  listToFilter.filter((card: CardObject) => card[category] === filterTerm)
);

export const OmitByCategory = (listToFilter: CardObject[], category: keyof CardObject, filterTerm: string) => (
  listToFilter.filter((card: CardObject) => card[category] !== filterTerm)
);