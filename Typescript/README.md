<h1>If you want to install Typescript, then just follow some steps.</h1>
<ul>
    <li>1. npm init-y</li>
    <li>2. npm install typescript --save-dev</li>
    <li>3. Create a tsconfig.json file and paste code -</li>
    <li>{
        "compilerOptions": {
                "target": "es6",
                "module": "commonjs",
                "outDir": "dist",
                "strict": true
            },
            "include": [
                "src/**/*.ts"
            ],
            "exclude": [
                "node_modules"
            ]
        }
    </li>
    <li>4. Change your package.json file with scripts like-</li>
    <li>
        "scripts": {
            "start": "tsc -w",
            "build": "tsc"
        },
    </li>
    <li>5. Create a src folder in root folder</li>
    <li>6. Create a index.ts file in src folder</li>
    <li>7. Paste some code and try it -</li>
    <li> let a: Number = 5;</li>
    <li> console.log(a)</li>
    <li>8. Now run, npm run start</li>
    <li>9. Now check your dist folder you will find a index.js file with compiled code.</li>
    
</ul>




<h1>If you want to install Typescript follow some steps-</h1
<ul>
  <ol>1. Create a folder for learning purposes like - Typescript</ol>
  <ol>2. npm init -y</ol>
  <ol>3. npm install typescript --save-dev</ol>
  <ol>4. Create a src folder in the root folder</ol>
  <ol>5. In the src folder create a file with an extension (.ts) like - index.ts</ol>
  <ol>6. In the src folder create a file with an extension (.ts) like - index.ts</ol>
  <ol>7. Now write an example code like -</ol>
  <br/>
  <br/>
  <ol>let a : Number = 5;</ol>
  <ol>console.log(a);</ol>
  <br/>
  <br/>
  <ol>8. Now check your dist folder, you will find the same file but with a .js extension with compiled code</ol>
  <ol>9. For learning purposes, you can follow the official website of Typescript</ol>
</ul>
