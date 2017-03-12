module.exports = {
  "parser": "babel-eslint",
  "extends": "google",
  "plugins": [
    "import",
    "react"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
  },
  "ecmaFeatures": {
    "modules": true,
    "jsx": true
  },
  "rules": {
    "max-len": ["error", 120 ],
    "no-useless-escape": 0,
  }
}
