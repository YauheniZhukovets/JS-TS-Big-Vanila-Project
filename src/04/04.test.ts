test("sould take old man older then 90", () => {
    const ages = [18,20,11,33,55,66,90,100];

    // const predicate = (age: number) => {
    //     return age > 91

    const oldAges = ages.filter(age => age > 91)

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})


test("sould take courses cheaper 160", () => {
    const courses = [
        {title: "CCS", price: 110},
        {title: "JS", price: 200},
        {title: "React", price: 150}
    ]

    // const cheapPredicate = (course: CourseType) => {
    //     return course.price < 160;
    // }

    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0]).toBe("CSS");
    expect(cheapCourses[1]).toBe("React");
})

test("get only competed tasks", () => {
  const tasks = [
      {id:1, title: 'Bread', isDone: false},
      {id:2, title: 'Milk', isDone: false},
      {id:3, title: 'Salt', isDone: false},
      {id:4, title: 'Sugar', isDone: false}
  ]
    const coplitedTasks = tasks.filter(task=>task.isDone)
    expect(coplitedTasks.length).toBe(2);
    expect(coplitedTasks[0].id).toBe(2);
    expect(coplitedTasks[1].id).toBe(4);
})

