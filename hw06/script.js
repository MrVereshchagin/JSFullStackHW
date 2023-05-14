function floydWarshall(graph) {
    const dist = graph.slice(); // copy of the adjacency matrix
  
    // Perform the algorithm
    const n = dist.length;
    for (let k = 0; k < n; k++) {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
          if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
            dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
          }
        }
      }
    }
  
    // Return the shortest distances between all pairs of vertices
    return dist;
  }

  const graph = [  [0, 1, 4, Infinity],
  [Infinity, 0, 2, 5],
  [Infinity, Infinity, 0, 1],
  [Infinity, Infinity, Infinity, 0]
];

const shortestDistances = floydWarshall(graph);
console.log(shortestDistances);