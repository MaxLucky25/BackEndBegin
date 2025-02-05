const addresses= [
        {id:1, title:"Nezalejnasti 12"},
        {id:2, title:"Selickogo 11"}
    ]

export const addressesRepository = {

    findAddresses(title: string | undefined | null) {
        if (title) {
            let filterAddresses = addresses.filter(c => c.title.indexOf(title) > -1)
            return filterAddresses;
        } else {
            return addresses;
        }
    },

    findAddressesById(id: number) {
        return addresses.find(p=>p.id === id);
    }
}