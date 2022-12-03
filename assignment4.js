class restaurantManager{
    constructor(){
        this.restaurantList = [
            {
                name: "Panjabi Junction",
                address: "Law gate, Phagwara",
                city: "Phagwara"
            },
            {
                name: "Ovan express",
                address: "Law gate, Phagwara",
                city: "Phagwara"
            },
            {
                name: "Get Together",
                address: "Law gate, Phagwara",
                city: "Phagwara"
            },
            {
                name: "Spice & Cool",
                address: "Law gate, Phagwara",
                city: "Jalandhar"
            },
            
        ]
    }
    printAllRestaurantNames = () => {
        this.restaurantList.forEach(restaurant => console.log(restaurant.name))
    }

    filterRestaurantByCity = (city) => {
        return (
            this.restaurantList.filter(rescity => {
                if(rescity.city === city){
                    console.log(rescity.name)
                } 
            })
        )
    }
}

x1 = new restaurantManager()
x1.printAllRestaurantNames()
x1.filterRestaurantByCity("Phagwara")