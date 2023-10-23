class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.")
        }
        this.wines.push({
            wineName,
            wineType,
            price: Number(price),
            paid: false
        })
        return `You reserved a bottle of ${wineName} ${wineType} wine.`
    }

    payWineBottle(wineName, price) {
        price = Number(price);
        let currentWine = this.wines.find(w => w.wineName === wineName);

        if (!currentWine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (currentWine.paid) {
            throw new Error(`${wineName} has already been paid.`)
        } else {
            currentWine.paid = true;
            this.bill += price /// currentWine.price;
            return `You bought a ${currentWine.wineName} for a ${price}$.`
        }
    }
    openBottle(wineName) {
        let currentWine = this.wines.find(w => w.wineName === wineName);
        if (!currentWine) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        if (!currentWine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`)
        } else {
            let index = this.wines.indexOf(currentWine);
            this.wines.splice(index, 1);
            return `You drank a bottle of ${wineName}.`
        }
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let buff = `You have space for ${this.space - this.wines.length} bottles more.\n`
            buff += `You paid ${this.bill}$ for the wine.\n`
            //return buff;
            let sorted = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            // let paid = sorted.map(e => e.paid ? "Has Paid" : "Not Paid")
            sorted.forEach(w => {
                buff += `${w.wineName} > ${w.wineType} - ${w.paid ? "Has Paid" : "Not Paid"}.\n`
            })
            return buff.trim()
        } else {

            let findWine = this.wines.find(b => b.wineType == wineType);

            if (wineType) {
                let result = [];
                let paid = findWine.payed ? "Has Paid" : 'Not Paid';
                result.push(`${findWine.wineName} > ${findWine.wineType} - ${paid}.`);
                return result.join('\n').trim();

            } else {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
    }
}
const selection = new WineSelection(2)
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

//const selection = new WineSelection(5)
//selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
//selection.payWineBottle('Bodegas Godelia Mencía', 144);
//selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
//selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
//console.log(selection.cellarRevision());
//You have space for 2 bottles more.
//You paid 144$ for the wine.
//Bodegas Godelia Mencía > Rose - Has Paid.
//Cabernet Sauvignon Napa Valley > Red - Not Paid.
//Sauvignon Blanc Marlborough > White - Not Paid.
//const selection2 = new WineSelection(2)
//console.log(selection2.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
//console.log(selection2.cellarRevision('Rose'));




