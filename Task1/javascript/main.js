const _warnDeveloperTemplate = document.querySelector("#warnDev");

const submitForm = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  let data = {
    numberOfDevs: parseInt(formData.get("numberOfDevs")),
    numberOfSweets: parseInt(formData.get("numberOfSweets")),
    startingSeat: parseInt(formData.get("startingSeat")),
  };
  warnTheDeveloper(data.numberOfDevs, data.numberOfSweets, data.startingSeat);
};

const warnTheDeveloper = (numberOfDevs, numberOfSweets, startingChair) => {
  if (startingChair > numberOfDevs) {
    alert(
      "The starting seat cannot be greater than the number of developer seats"
    );
  } else {
    // Initialize an empty array
    let devSeatsArray = new Array(0);

    // Create an array starting from zero and consistently increase by 1 until the length of the array is the number of sweets to be shared.
    for (let i = 0; i < numberOfSweets; i++) {
      //   This ensures that that the array starts from the chair that was selected from the hat.
      let devNumber = i + startingChair;

      // This iteration ensures that we check that the developer number is not more than the number of developers present in the game.
      while (devNumber > numberOfDevs) {
        devNumber = devNumber - numberOfDevs;
      }
      devSeatsArray.push(devNumber);
    }

    let developerToWarn = devSeatsArray.slice(-1)[0];
    _warnDeveloperTemplate.innerHTML = developerToWarn;

    // Prints developer seat to console
    console.log(developerToWarn);
  }
};

// warnTheDeveloper(5, 3, 2);
