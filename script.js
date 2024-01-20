const arr = [
    {
      id: 1,
      name: "john",
      age: 18,
      profession: "developer",
    },
    {
      id: 2,
      name: "jack",
      age: 20,
      profession: "developer",
    },
    {
      id: 3,
      name: "karen",
      age: 19,
      profession: "admin",
    },
  ];
  
  document.querySelector("#print-developers").addEventListener("click", () => {
    // Print Developers
  
    // Filtering out developer objects and printing them in tabular form.
    console.clear();
    console.log("Here are all the developer objects:");
    arr.forEach((element) => {
      element.profession === "developer" && console.table(element);
    });
  });
  
  document.querySelector("#add-new-data").addEventListener("click", () => {
    // Add Data
  
    // Taking inputs from users.
    const newName = prompt("Enter your Name");
    const newAge = prompt("Enter your Age");
    const newProfession = prompt("Enter your Profession");
  
    // Checking if the inputs are valid.
    if (!newName || !newAge || isNaN(newAge) || !newProfession) {
      alert("Enter correct information.");
      return;
    }
  
    // Adding the object to 'arr' with key-value pairs based on the inputs using push method.
    arr.push({
      id: arr.length + 1,
      name: newName.trim(),
      age: Number(newAge),
      profession: newProfession.trim(),
    });
  
    // Printing the last element of 'arr' in tabular form as the added element is at the end.
    console.clear();
    console.log("New data has been added, and here is the new object:");
    console.table(arr[arr.length - 1]);
  });
  
  document.querySelector("#remove-admins").addEventListener("click", () => {
    // Remove Admins
  
    // Creating 'adminIndices' to store the indices of the objects.
    const adminIndices = [];
  
    // Iterating over 'arr' and pushing the indices of all objects whose key (profession) has the value "admin".
    arr.forEach((e, i) => {
      if (e.profession === "admin") {
        adminIndices.push(i);
      }
    });
  
    // Removing admin elements from the end to avoid index shifting issues.
    for (let i = adminIndices.length - 1; i >= 0; i--) {
      arr.splice(adminIndices[i], 1);
    }
  
    // Printing each object in tabular form.
    console.clear();
    console.log("All administrators have been removed.");
    consoleArr();
  });
  
  document.querySelector("#concatenate-array").addEventListener("click", (e) => {
    // Concatenate Array
  
    // Creating sample objects.
    const newArr = [
      {
        id: arr.length + 1,
        name: "Rahul",
        age: 25,
        profession: "developer",
      },
      {
        id: arr.length + 2,
        name: "Shubham",
        age: 25,
        profession: "admin",
      },
      {
        id: arr.length + 3,
        name: "Sundram",
        age: 25,
        profession: "admin",
      },
    ];
  
    // Adding each element of 'newArr' to 'arr' using the push method.
    newArr.forEach((e) => arr.push(e));
    console.clear();
    console.log("Array has been concatenated.");
    consoleArr();
  });
  
  // Logging array's object elements in tabular form.
  function consoleArr(array) {
    console.log("Logging array's object elements in tabular form.");
    arr.forEach((element) => console.table(element));
  }