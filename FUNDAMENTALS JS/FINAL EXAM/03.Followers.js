function followers(input) {
    let result = new Map();
    let countFollowers = 0

    for (let line of input) {
        if (line === "Log out") {
            break;
        }
        let tokens = line.split(": ");
        let command = tokens[0];
        let userName = tokens[1];
        let likes = 0;
        let comments = 0;

        switch (command) {
            case "New follower":
                if (!result.has(userName)) {
                    result.set(userName, []);
                    result.get(userName).push(likes);
                    result.get(userName).push(comments);
                    countFollowers++;
                }
                break;

            case 'Like':
                let currentCount = Number(tokens[2]);
                if (result.has(userName)) {
                    result.get(userName)[0] += currentCount;
                } else {
                    result.set(userName, []);
                    result.get(userName).push(likes);
                    result.get(userName).push(comments);
                    result.get(userName)[0] += currentCount;
                    countFollowers++;
                }
                break;

            case "Comment":
                if (result.has(userName)) {
                    result.get(userName)[1] += 1;
                } else {
                    result.set(userName, []);
                    result.get(userName).push(likes);
                    result.get(userName).push(comments);
                    result.get(userName)[1] = 1;
                    countFollowers++;
                }
                break;

            case "Blocked":
                if(result.has(userName)){
                    result.delete(userName);
                    countFollowers--;
                } else {
                    console.log(`${userName} doesn't exist.`);
                }
                break;
        }

    }

    console.log(`${countFollowers} followers`);
    for (let element of result){
        let sum = element[1][0] + element[1][1];
      
        console.log(`${element[0]}: ${sum}`);
    }

}

followers(["New follower: George", "Like: George: 5", "New follower: George", "Log out"]);
console.log("-------------");
followers(["Blocked: Amy", "Comment: Amy", "New follower: Amy", "Like: Tom: 5", "Like: Ellie: 5", "Log out"]);
followers(["Like: Katy: 3", "Comment: Katy", "New follower: Bob", "Blocked: Bob", "New follower: Amy", "Like: Amy: 4", "Log out"])