const rust = import('./pkg');

rust.then(m => m.greet('world'))
    .catch(console.error);