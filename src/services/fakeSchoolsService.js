const schools = [
	{
		_id: '5b21ca3eeb7f6fbccd471815',
		name: "Virginia",
		dailyRentalRate: 2.5,
		publishDate: '2018-01-03T19:04:28.809Z',
		liked: true,
		starred: true,
		postion: 1
	},
	{
		_id: '5b21ca3eeb7f6fbccd471816',
		name: 'Evergreen',
		dailyRentalRate: 2.5,
		postion: 2
	},
	{
		_id: '5b21ca3eeb7f6fbccd471817',
		name: 'Tataglia',
		dailyRentalRate: 3.5,
		postion: 3
	},
	{
		_id: '5b21ca3eeb7f6fbccd47181a',
		name: 'Riverdale',
		dailyRentalRate: 3.5,
		position: 4
	}
];

export function getSchools() {
	return schools;
}

export function getSchool(id) {
	return schools.find((s) => s._id === id);
}

export function saveSchool(school) {
	let schoolInDb = schools.find((s) => s._id === school._id) || {};
	schoolInDb.title = school.title;
	schoolInDb.dailyRentalRate = school.dailyRentalRate;

	if (!schoolInDb._id) {
		schoolInDb._id = Date.now().toString();
		schools.push(schoolInDb);
	}

	return schoolInDb;
}

export function deleteSchool(id) {
	let schoolInDb = schools.find((s) => s._id === id);
	schools.splice(schools.indexOf(schoolInDb), 1);
	return schoolInDb;
}
