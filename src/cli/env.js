const parseEnv = () => {
  const envVars = process.env;

  for (const [key, value] of Object.entries(envVars)) {
    if (key.slice(0, 3) === 'RSS') {
      console.log(`${key} = ${value}`);
    }
  }
};

parseEnv();
