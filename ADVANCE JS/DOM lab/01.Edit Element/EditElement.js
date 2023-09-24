function editElement(reference, match, replacer) {
    // TODO
    let text = reference.textContent;
    let matcher = new RegExp(match, "g");
    let editElement = text.replace(matcher,replacer);
    text.textContent = editElement;
}