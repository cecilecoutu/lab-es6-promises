// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/

// Iteration 1 - using callbacks

getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction(
    "mashedPotatoes",
    1,
    (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;
      getInstruction(
        "mashedPotatoes",
        2,
        (step3) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step3}</li>`;
          getInstruction(
            "mashedPotatoes",
            3,
            (step4) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step4}</li>`;
              getInstruction(
                "mashedPotatoes",
                4,
                (step5) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step5}</li>`;
                  document
                    .querySelector("#mashedPotatoesImg")
                    .removeAttribute("hidden");
                  getInstruction(
                    "mashedPotatoes",
                    5,
                    (step6) => {
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>${step6}</li>`;
                      () => {}, (error) => console.log(error);
                    },
                    (error) => console.log(error)
                  );
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
  );

  // ...

  // Iteration 2 - using promises

  obtainInstruction("steak", 0).then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  });
  //  ... Your code here
  obtainInstruction("steak", 1).then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainIstruction("steak", 2);
  });
  obtainInstruction("steak", 2).then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  });
  obtainInstruction("steak", 3).then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  });
  obtainInstruction("steak", 4).then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  });
  obtainInstruction("steak", 5).then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  });
  obtainInstruction("steak", 6).then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  });
  obtainInstruction("steak", 7)
    .then((step7) => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
      return obtainInstruction("steak", 8);
    })

    .catch((error) => {
      console.error("An error occurred", error);
    });

  // ... Your code here

  // ...

  // Iteration 3 using async/await

  /*let step = 0;
    function obtainInstruction() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (!directions[step]) reject("Instructions not found.");
          else resolve();
        });
        // }, 2000);
      });
    }

    async function makeBroccoli() {
      await obtainInstruction(0);
      await obtainInstruction(1);
      await obtainInstruction(2);
      await obtainInstruction(3);
      await obtainInstruction(4);
      await obtainInstruction(5);
      await obtainInstruction(6);
      await obtainInstruction(7);
      await obtainInstruction(8);
    }

    console.error("An error occurred", error);
  }*/

  // ...

  // Bonus 2 - Promise all
  // ...
});
