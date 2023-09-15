function vacation(count, groupType, day) {
    let totalPrice = 0;

    switch (groupType) {
        case "Students":
            if (day === "Friday") {
                totalPrice = count * 8.45;
            } else if (day === "Saturday") {
                totalPrice = count * 9.80;
            } else if (day === "Sunday") {
                totalPrice = count * 10.46;
            }

            if (count >= 30) {
                totalPrice = totalPrice * 0.85;
            }
            break;

        case "Business":
            if (count >= 100) {
                count = count - 10;
            }

            if (day === "Friday") {
                totalPrice = count * 10.90;
            } else if (day === "Saturday") {
                totalPrice = count * 15.60;
            } else if (day === "Sunday") {
                totalPrice = count * 16;
            }
            break;

        case "Regular":
            if (day === "Friday") {
                totalPrice = count * 15;
            } else if (day === "Saturday") {
                totalPrice = count * 20;
            } else if (day === "Sunday") {
                totalPrice = count * 22.50;
            }

            if (count >= 10 && count <= 20) {
                totalPrice = totalPrice * 0.95;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}

vacation(30, "Students", "Sunday")