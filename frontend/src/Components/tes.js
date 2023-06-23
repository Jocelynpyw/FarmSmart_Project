export default function applyAHP(courses) {
  // Matrice de comparaison
  const pairwiseComparisons = [
    [1, 3, 5, 7],
    [1 / 3, 1, 3, 5],
    [1 / 5, 1 / 3, 1, 3],
    [1 / 7, 1 / 5, 1 / 3, 1],
  ];

  // Criteria Weight
  const criteriaWeights = pairwiseComparisons.map((row) =>
    row.map((value) => value / row.reduce((acc, val) => acc + val, 0))
  );

  const columnSum = criteriaWeights.reduce(
    (acc, row) => row.map((value, j) => value + acc[j]),
    Array(criteriaWeights[0].length).fill(0)
  );

  const criteriaWeightsNormalized = columnSum.map(
    (sum) => sum / columnSum.reduce((acc, val) => acc + val, 0)
  );

  // Consisthensis Matrix
  const courseScores = courses.map((course) => {
    const score =
      course.cost * criteriaWeightsNormalized[0] +
      course.experience * criteriaWeightsNormalized[1] +
      course.rating * criteriaWeightsNormalized[2] +
      course.hours * criteriaWeightsNormalized[3];

    return { ...course, score };
  });

  // Étape 4 : Sélection du meilleur cours
  const sortedCourses = courseScores.sort((a, b) => b.score - a.score);
  const meilleurCour = sortedCourses[0];

  return meilleurCour;
}
