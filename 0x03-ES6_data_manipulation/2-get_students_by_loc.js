const getStudentsByLocation = (students, city) => {
	const objectArray = student.filter((person) => person.location === city);
	return objectArray;
};

export default getStudentsByLocation;
