// ⚠️ NE PAS TOUCHER

const findSeniors = require("./findSeniors");

const persons = [
  { name: "Mary", experience: 8, job: "web dev" },
  { name: "Tony", experience: 6, job: "data analyst" },
  { name: "John", experience: 2, job: "data analyst" },
  { name: "Jane", experience: 6, job: "web dev" },
  { name: "Homer", experience: 5, job: "data analyst" },
  { name: "Leonardo", experience: 2, job: "web dev" },
  { name: "Carla", experience: 4, job: "data analyst" },
  { name: "Lisa", experience: 3, job: "data analyst" },
  { name: "Millie", experience: 5, job: "web dev" },
  { name: "Penelope", experience: 7, job: "data analyst" },
];

test("both length should be 3", () => {
  expect(findSeniors(persons)[0].length).toBe(3);
  expect(findSeniors(persons)[1].length).toBe(3);
});

test("data analyst array should include Homer", () => {
  expect(findSeniors(persons)[1].some((e) => e.name === "Homer")).toBe(
    true
  );
});
