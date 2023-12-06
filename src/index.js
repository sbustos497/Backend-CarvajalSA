import app from './app.js';
import { sequelize } from './Database/db.js';
import {PORT} from './config.js';


async function main() {
 try {
      await sequelize.sync();
      app.listen(PORT);
      console.log('Server on port', PORT);
  }
  catch (error) {
      console.log('Error: '+error);
  }
    
}

main();