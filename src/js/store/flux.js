const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContact() {
				fetch(url + "agenda/aura_arana")
					.then(response => response.json())
					.then(result => {
						console.log("Get Contact", result),
							setStore({
								contacts: result
							});
					})
					.catch(e => console.error(e));
			},
			addContact(name, phone, email, address) {
				fetch(url, {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "aura_arana"
					})
				}).then(() => {
					fetch(url + "agenda/aura_arana")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			},
			editContact(id, name, phone, email, address) {
				fetch(url + id, {
					method: "put",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "aura_arana"
					})
				}).then(() => {
					fetch(url + "agenda/aura_arana")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			}
		}
		//(Arrow) Functions that update the Store
		// Remember to use the scope: scope.state.store & scope.setState()
	};
};

export default getState;
