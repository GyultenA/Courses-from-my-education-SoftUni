class  Company {
    constructor(){
        this.department = [];

    }
    addEmployee (user, salary, position, department){
        if (!user || !salary || !position || !department || salary < 0){
            throw new Error("Invalid input!")
        } else {
            if(!this.department[department]){
                this.department[department] = []
            }
            this.department[department].push({user, salary, position})
            return `New employee is hired. Name: ${user}. Position: ${position}`
        }
    }
    bestDepartment(){
        const avrgDepartments = {};
        Object.keys(this.department).forEach(key =>{
            let average = 
            this.department[key].reduce((acc, curr) => acc + curr.salary, 0) / this.department[key].length;
            avrgDepartments[key] = average.toFixed(2);
        })
       // console.table(avrgDepartments)
       const sorted = Object.entries(avrgDepartments).sort((a,b) => b[1] - a[1]) // value
       let result = `Best Department is: ${sorted[0][0]}\nAverage salary: ${sorted[0][1]}`;

       this.department[sorted[0][0]]
       .sort((a,b) => b.salary - a.salary || a.user.localeCompare(b.user))
       .forEach( x => {result += `\n${x.user} ${x.salary} ${x.position}`

       })
      // console.table(avrgDepartments)
      // console.log(result)
       return result;
    }

}


//expected 'Best Department is: Human resources\nAverage salary: 1675\nStanimir 2000 engineer\nGosho 1350 HR'
//to equal 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'

//expected 'Best Department is: Construction\nAverage salary: 1500.00\nStanimir 2000 engineer\nStan 2000 architect\nPesho 1500 electrical engineer\nSlavi 500 dyer'
//to equal 'Best Department is: Construction\nAverage salary: 1500.00\nStan 2000 architect\nStanimir 2000 engineer\nPesho 1500 electrical engineer\nSlavi 500 dyer'


let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());