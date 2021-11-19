const ages = [18,20,11,33,55,66,90,100]; // исходный

const predicate = (age: number) => {
    return age > 91;
}
const oldAges = [100]; //результирующий


type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: "CCS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150}
  ];
const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourses = [
    {title: "CCS", price: 110},
    {title: "React", price: 150}
];
