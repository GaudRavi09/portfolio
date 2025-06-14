const dotenv = require('dotenv');
dotenv.config();

const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;

  // configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';

  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
    production: false,
    firebaseConfig: {
      appId: '${process.env['FIREBASE_APP_ID']}',
      apiKey: '${process.env['FIREBASE_API_KEY']}',
      projectId: '${process.env['FIREBASE_PROJECT_ID']}',
      authDomain: '${process.env['FIREBASE_AUTH_DOMAIN']}',
      measurementId: '${process.env['FIREBASE_MEASUREMENT_ID']}',
      storageBucket: '${process.env['FIREBASE_STORAGE_BUCKET']}',
      messagingSenderId: '${process.env['FIREBASE_MESSAGING_SENDER_ID']}',
    }
  };
  `;

  console.log('The file `environment.ts` will be written with the following content: \n');

  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
    }
  });
};

setEnv();
