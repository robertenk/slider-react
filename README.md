# slider-react

### Requirements

```
Node >= 14.19
yarn >= 1.22
```

### Development Setup

```bash
# install dependencies
yarn install

# start dev server (on port 3000)
yarn dev

# build for production
yarn build

# preview production build
yarn preview
```

### `.env` Files

Manually create config files based on `.env.dist`:

```bash
.env.development
.env.production
```

An env file for a specific mode (e.g. `.env.production`) will take higher priority than a generic one (e.g. `.env`).

### Tests

```bash
# run unit tests
yarn test
```

### Linting/Formatting

This project uses `ESLint` to **lint** the code (.js|.jsx) based on the `eslint-config-airbnb` rules and some additional _formatting_ rules which are defined in the `.prettierrc` config.

In order to automatically **format** the code (.js|.jsx|.css|...), it is recommended to install the `Prettier` Plugin which is available for most IDEs.

For now, ViteJS does not support ESLint 8.x (= no automatic linting when dev server is running).

### Ideas/Improvements

Slider:  
[ ] Refactor component  
[ ] Improve adaptive slideshow width  
[ ] Enable infinite sliding  
[ ] Add dot indicators  
[ ] Enable navigation via dragging  
[ ] Add autoplay option

Project:  
[ ] Configure build pipeline  
[ ] Add missing favicon
