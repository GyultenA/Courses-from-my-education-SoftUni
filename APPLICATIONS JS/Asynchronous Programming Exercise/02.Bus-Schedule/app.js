function solve() {
    const infoElement = document.querySelector("div#info span.info");
    //console.log(infoElement);
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");

    let nextStopId = "depot";
    let stopName;


    async function depart() {
        try {
            const response = await fetch(`address http://localhost:3030/jsonstore/bus/schedule/${nextStopId}`);

            if (!response.ok) {
                let error = new Error();
                error.status = response.status;
                error.statusText = response.statusText;
                throw error;
            }
            const data = await response.json();
            // console.log(data)
            stopName = data.name;
            nextStopId = data.next;
            infoElement.textContent = `Next stop ${stopName}`; // data.name
            departBtn.disable = true;
            arriveBtn.disable = false;

        }
        catch (error) {
            infoElement.textContent = "Error";
            departBtn.disable = true;
            arriveBtn.disable = true;

        }
    }

    function arrive() {
        infoElement.textContent = `Arriving at ${stopName}`;
        departBtn.disable = false;
        arriveBtn.disable = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();