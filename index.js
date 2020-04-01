function breakOut(array, changeValue, stopValue) {
  array.forEach(element => {
    if (element === stopValue) {
      break;
    }

    element = changeValue;
  })

  return array;
}
