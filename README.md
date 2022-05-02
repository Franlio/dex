# Decentralize Exchange

This repo is a demo of decentralize exchange for ERC20 tokens.

## Installation

Install the required packages inside the project directory

```zsh
npm install
npm install @openzeppelin/contracts @openzeppelin/test-helpers 
```

Install the required packages inside the client directory

```bash
cd client
npm install
npm install @metamask/detect-provider
```

## Deploy and run

**You need to open two terminals.**

Inside the project folder with the *first* terminal

```bash
truffle develop
migrate -reset
```

Inside the client folder with the *second* terminal

```bash
npm start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
