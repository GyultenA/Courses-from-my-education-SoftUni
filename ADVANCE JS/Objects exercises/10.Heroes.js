function heroes(){
    const heroList = {};
    heroList.mage = (mage) => {
        const mageHero = {
            name: mage,
            health: 100,
            mana: 100,
            cast(spell){
                mageHero.mana--;
                console.log(`${mageHero.name} cast ${spell}`);
            }
        }
        return mageHero;
    }

    heroList.fighter = (fighter) => {
        const fighterHero = {
            name: fighter,
            health: 100,
            stamina: 100,
            fight(){
                fighterHero.stamina--;
                console.log(`${fighterHero.name} slashes at the foe!`);
            }
        }
        return fighterHero;
    }
    return heroList;

}

let create = heroes();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
