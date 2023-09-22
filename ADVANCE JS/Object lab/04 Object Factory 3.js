function factory(dic, list) {
    return list.map(order => {
        const object = Object.assign({}, order.template);

        for (let parts of order.parts) {
            object[parts] = dic[parts];
        }

        return object;
    });
}