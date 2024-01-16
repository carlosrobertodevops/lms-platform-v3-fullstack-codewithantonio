const requiredFields = ['Kotechka', 'Course about kotechka', null, null, null];

const completedFields = requiredFields.filter((field) => Boolean(field));

console.log(completedFields);
