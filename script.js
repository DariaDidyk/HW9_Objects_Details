const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        this.kettle.ingridients[nameOfIngridient] = amount;
        if (this[nameOfIngridient] >= amount) {
            this[nameOfIngridient] = this[nameOfIngridient] - amount;
        } 
        return this.nameOfIngridient;
    },
    cook(recipe, name) {
        let result = true;
        for (const key in recipe) {
            if(this.kettle.ingridients[key] !== recipe[key]) {
                console.log('Lack of ingredients');
                return result = false;
            };   
        };    
        if(result) {
            return console.log('We can cook' + ':' + name);
        };
    }
};

kitchen.addIngridientToKettle('bone', 10);
kitchen.addIngridientToKettle('stone', 100);

kitchen.addIngridientToKettle('lava', 10);
kitchen.addIngridientToKettle('evil', 999);

kitchen.cook(magicBook.recipes.golem, 'golem');
kitchen.cook(magicBook.recipes.littleDevil, 'littleDevil');

console.log(kitchen);
console.log(kitchen.kettle.ingridients);