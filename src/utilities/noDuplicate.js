// const numbers = [1, 1, 2, 3, 4, 10, 3, 4, 5, 6, 10];

const noDuplicate = (lessons) => {
    // const iterableArray = Array.from(lessons);
    let uniqueItems = [];
    for(const arrayItem of lessons) {
        console.log(arrayItem);
        if(uniqueItems.includes(arrayItem)){
            continue;
        }
        else {
            uniqueItems.push(arrayItem);
        }
        console.log(uniqueItems);
    }
    return uniqueItems;
}

// console.log(noDuplicate(numbers));

export default noDuplicate();