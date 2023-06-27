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
    <br/>
    <br/>
    <li>4. Change your package.json file with scripts like-</li>
    <li>
        "scripts": {
            "start": "tsc -w",
            "build": "tsc"
        },
    </li>
    <br/>
    <br/>

    <li>5. Create a src folder in root folder</li>
    <li>6. Create a index.ts file in src folder</li>
    <li>7. Paste some code and try it -</li>
    <li> let a: Number = 5;</li>
    <li> console.log(a)</li>
    <br/>
    <br/>
    <li>8. Now run, npm run start</li>
    <li>9. Now check your dist folder you will find a index.js file with compiled code.</li>
    
</ul>