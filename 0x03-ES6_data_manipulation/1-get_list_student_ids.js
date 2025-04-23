const getListStudentIds = (objArray) => {
	if (!Array.isArray(objArray)) {
		return [];
	}
	return objArry.map((studentId) => studentId.id);
};

export default getListStudentIds;
