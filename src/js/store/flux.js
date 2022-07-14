const getState = ({ getStore, getActions, setStore }) => {
  function getData() {
    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/usertest7", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        console.log(resp.ok); // will be true if the response is successfull
        console.log(resp.status); // the status code = 200 or code = 400 etc.
        return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //here is were your code should start after the fetch finishes
        // console.log(data); //this will print on the console the exact object received from the server
        setStore({ contacts: data });
      })
      .catch((error) => {
        //error handling
        console.log(error);
      });
  }
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
      contacts: [
        {
          // id: "3238",
          // agenda_slug: "usertest7",
          // full_name: "FirstName LastName",
          // email: "placeholder@gmail.com",
          // phone: "1112223333",
          // address: "123 Address Lane",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        getData();
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
      saveContact: (newContact) => {
        const addToContact = {
          agenda_slug: "usertest7",
          ...newContact,
        };
        console.log("add to contact", addToContact);

        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          body: JSON.stringify(addToContact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is were your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            getData();
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      },
      editContact: (contact, id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
          method: "PUT",
          body: JSON.stringify(contact),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is were your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            getData()
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
        // const edited = {
        //   // id: "3238",
        //   // agenda_slug: "usertest7",
        //   // full_name: "FirstName LastName",
        //   // email: "placeholder@gmail.com",
        //   // phone: "1112223333",
        //   // address: "123 Address Lane",
        // }
        // // const addToContact = {
        // //   agenda_slug: "usertest7",
        // //   ...newContact,
        // // };


          

        // fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
        //   method: "PUT",
        //   body: JSON.stringify(),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // })
        //   .then((resp) => {
        //     console.log(resp.ok); // will be true if the response is successfull
        //     console.log(resp.status); // the status code = 200 or code = 400 etc.
        //     return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        //   })
        //   .then((data) => {
        //     //here is were your code should start after the fetch finishes
        //     console.log(data); //this will print on the console the exact object received from the server
        //   })
        //   .catch((error) => {
        //     //error handling
        //     console.log(error);
        //   });
        // DELETE: /apis/fake/contact/{contact_id}
      },
      deleteContact: (id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is were your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
            getData();
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
        // DELETE: /apis/fake/contact/{contact_id}
      },
      deleteAllContacts: () => {
        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/usertest7",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((resp) => {
            console.log(resp.ok); // will be true if the response is successfull
            console.log(resp.status); // the status code = 200 or code = 400 etc.
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is were your code should start after the fetch finishes
            console.log(data); //this will print on the console the exact object received from the server
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
        // DELETE: /apis/fake/contact/{contact_id}
      },
    },
  };
};

export default getState;
