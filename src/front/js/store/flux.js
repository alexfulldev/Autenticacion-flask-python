const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
		user: null, 
		token: false

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			register: async (formData) => {
				try{
					// fetching data from the backend

					const resp = await fetch(process.env.BACKEND_URL + "/api/register",{
						headers: {
							'Content-Type': 'application/json'
						},
						method: 'POST',
						body: JSON.stringify(formData)
					})
					const data = await resp.json()
					setStore({ user: data.user, token: data.token })
					localStorage.setItem('token', data.token)
					
					
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			login: async (email,password) => {
				const response = await fetch(process.env.BACKEND_URL + "/api/login", {
					method:"POST",
					headers:{"Content-Type": 'application/json'},
					body: JSON.stringify({email, password})
				})
				if(!response.ok) throw Error("Hay un problema con el login")

					if(response.status === 401){throw ("credenciales no validos")}
					else if(response.status === 400){throw ("email o password incorrectos")}
					const data = await response.json()
					localStorage.setItem("token",data.token)
					setStore({ user: data.user})
					return data;
				
				
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
			}
		}
	};
};

export default getState;
