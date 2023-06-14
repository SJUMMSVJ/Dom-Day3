const form = document.querySelector("form");
    const table = document.querySelector("#userTable");
    // const firstnameInput=document.querySelector("#firstname");
    // const lastnameInput=document.querySelector("#lastname");
    // const addressInput=document.querySelector("#address");
    // const pincodeInput=document.querySelector("#pincode");
    // const genderInput=document.querySelector("#gender");
    // const stateInput=document.querySelector("#state");
    // const countryInput=document.querySelector("#country");

    form.addEventListener("submit", event => {
      event.preventDefault();
      const firstname = document.querySelector("#firstname").value;
      const lastname = document.querySelector("#lastname").value;
       const address = document.querySelector("#address").value;
     const pincode = document.querySelector("#pincode").value;
       const gender = document.querySelector("#gender").value;
       const state = document.querySelector("#state").value;
       const country = document.querySelector("#country").value;

      const row = `<tr><td>${firstname}</td><td>${lastname}</td><td>${address}</td><td>${pincode}</td><td>${gender}</td><td>${state}</td><td>${country}</td></tr>`;
      table.innerHTML += row;
      
      document.querySelector("#firstname").value="";
      document.querySelector("#lastname").value="";
      document.querySelector("#address").value="";
      document.querySelector("#pincode").value="";
      document.querySelector("#gender").value="";
      document.querySelector("#state").value="";
      document.querySelector("#country").value="";
  
    });