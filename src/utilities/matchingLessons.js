// const lessons = [2, 1, 3, 5, 1, 3, 5, 2, 10, 3, 10, 4, 6, 7, 7, 8, 9, 10, 4];

// const lesson = '4';

const matchingLessons = (array, lesson) => {
    console.log("array, lesson: ", array, lesson);
    let matchingLessonsArray = [];
    for (const singleLesson of array) {
        console.log(singleLesson);
        if (singleLesson == lesson) {
            matchingLessonsArray.push(singleLesson);
        }
        else {
            continue;
        }
        console.log("matchingLessonsArray: ", matchingLessonsArray);
    }
    return matchingLessonsArray;
}

// console.log("matchingLessons(lessons, lesson): ", matchingLessons(lessons, lesson));

export default matchingLessons;