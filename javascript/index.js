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

obtainInstruction('steak', 0)
.then( (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  obtainInstruction(0)
  //  ... Your code here
.then ((step1) => { 
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  obtainInstruction(1)
.then ((step2) => { 
document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
obtainInstruction(2)

.then ((step3) => { 
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  obtainInstruction(3)

.then ((step4) => { 
document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
obtainInstruction(4)

.then ((step5) => { 
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  obtainInstruction(5)


.catch((err) => console.log(err));

  

});
// ... Your code here
  // ...

  // Iteration 3 using async/await
  // ...

  // Bonus 2 - Promise all
  // ...
});
})