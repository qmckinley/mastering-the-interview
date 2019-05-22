var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

// Linear Search // Best Case: O(1) // Worst Case: O(n)
beasts.indexOf('Godzilla'); // 1

beasts.findIndex(function(item){ // 1
  return item === 'Godzilla';
});

beasts.find(function(item){ // Godzilla
  return item === 'Godzilla';
});

beasts.includes('Godzilla'); // True

// If data is sorted...we can do better than O(n)
// Binary Search // O(log N)