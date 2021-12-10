const students = [
    { _id: 1, name: "Ahmed", meanScore: 50.0, school: { _id: "5b21ca3eeb7f6fbccd471815", name: "Virginia" } },
    { _id: 2, name: "Isaac", meanScore: 70, school: { _id: "5b21ca3eeb7f6fbccd471816", name: "Evergreen" } },
    { _id: 3, name: "Zuchu", meanScore: 23.6, school: { _id: "5b21ca3eeb7f6fbccd471817", name: "Tataglia" } },
    { _id: 4, name: "Zeddy", meanScore: 42, school: { _id: "5b21ca3eeb7f6fbccd471816", name: "Evergreen" } },
    { _id: 5, name: "Riri", meanScore: 75, school: { _id: "5b21ca3eeb7f6fbccd471815", name: "Virginia" } },
    { _id: 6, name: "Caroline", meanScore: 75, school: { _id: "5b21ca3eeb7f6fbccd471815", name: "Virginia" } },
    { _id: 7, name: "Becky", meanScore: 30.45, school: { _id: "5b21ca3eeb7f6fbccd471817", name: "Tataglia" } },
    { _id: 8, name: "Ben", meanScore: 20.9, school: { _id: "5b21ca3eeb7f6fbccd471817", name: "Tataglia" } },
    { _id: 9, name: "Dred", meanScore: 55.47, school: { _id: "5b21ca3eeb7f6fbccd471816", name: "Evergreen" } },
    { _id: 9, name: "Derrick", meanScore: 35.47, school: { _id: "5b21ca3eeb7f6fbccd47181a", name: "Riverdale" } },
    {
        _id: 10,
        name: "Wayne",
        meanScore: 86.2,
        school: { _id: "5b21ca3eeb7f6fbccd471815", name: "Virginia" }
    },
];

export const getStudents = () => students;

export const getStudent = id => students.filter(s => s._id === id);

export default {
    getStudent,
    getStudents
}

