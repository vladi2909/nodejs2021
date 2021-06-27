import { TryDBConnect } from "./common/DBconnect";
import app from './app';
import { PORT } from './common/config';

TryDBConnect(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
})