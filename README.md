# Web Dev Challenge - Sanity.io Edition

> The holidays are upon us and Santa’s elves are behind schedule! Build an app to get the holiday back on track.

- [Web Dev Challenge - Sanity.io Edition](#web-dev-challenge---sanityio-edition)
  - [Get started](#get-started)
    - [Run development server](#run-development-server)
    - [Seed data](#seed-data)
    - [Change the content model](#change-the-content-model)
  - [Learn more](#learn-more)

## Get started

Create your own Sanity Project and initialize a `.env` file with your own Project ID and Dataset name by running the following command.

If you do not yet have a Sanity account, you'll be prompted to create one.

```bash
npx sanity@latest init --env
```

Note: Your Project ID and Dataset name are not considered secret, it's just convenient to retrieve them from the `.env` file.

### Run development server

Then, run the following command to start the Sanity Studio:

```bash
npm run dev
```

Now open your browser and navigate to [http://localhost:3333](http://localhost:3333) to access the Sanity Studio.

### Seed data

To seed the project with some initial data, run the following command:

```bash
npx sanity@latest dataset import seed.tar.gz
```

Or modify the original seed data creation script and re-run with. **Warning:** this will also delete all existing data in the dataset.

```bash
npx sanity@latest exec seed.ts --with-user-token
```

### Change the content model

The document type definitions and their fields can all be found in `src/schemaTypes`. You can safely modify these or add new ones, make sure to add them to the `src/schemaTypes/index.ts` array.

## Learn more

- [Sanity documentation](https://www.sanity.io/docs)
- [Sanity Learn](https://www.sanity.io/learn)
