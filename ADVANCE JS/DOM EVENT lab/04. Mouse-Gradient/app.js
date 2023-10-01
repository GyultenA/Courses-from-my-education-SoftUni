function attachGradientEvents() {
    let gradient = document.getElementById("gradient");

    gradient.addEventListener("mousemove", function (event) {
        //console.log(event.offsetX) / ky se namira mouse
        let gradientWidth = event.target.clientWidth //offsetWidth;
        let position = event.offsetX  / (gradientWidth -1);
        
        //debugger
        // console.log(gradientWidth)
        let result = Math.trunc(position * 100) + "%"

        document.getElementById("result").textContent = result
    });

    gradient.addEventListener("mouseout", gradientOut);

    function gradientOut(){
        document.getElementById("result").textContent = "";
    }
}