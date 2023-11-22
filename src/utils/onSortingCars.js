const onSortingCars = (value, cars, setSortedCars) => {
  if (!cars) return;

  if (value === 'Brand Name') {
    const inAlphabeticalBrandOrder = [...cars]?.sort((firstCar, secondCar) =>
      firstCar.heading.localeCompare(secondCar.heading)
    );
    setSortedCars(inAlphabeticalBrandOrder);
    return;
  } else if (value === 'Model Name') {
    const inAlphabeticalModelOrder = [...cars]?.sort((firstCar, secondCar) =>
      firstCar.subheading.localeCompare(secondCar.subheading)
    );
    setSortedCars(inAlphabeticalModelOrder);
    return;
  } else if (value === 'Price Amount') {
    const inAscendingPriceOrder = [...cars]?.sort(
      (firstCar, secondCar) => firstCar.price - secondCar.price
    );
    setSortedCars(inAscendingPriceOrder);
    return;
  }
};
export default onSortingCars;
