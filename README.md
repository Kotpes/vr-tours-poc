## What is this
This is test destination booking app to try on VR headsets and a browser

## How to start
`cd` into project directory and run: 
```bash
yarn install
```
If you would like to proxyfy locally running app to your VR headset's browser (or just phone's browser), you'll need to check out [this tutorial](https://hackernoon.com/how-i-got-a-react-vr-dev-environment-working-with-an-android-cardboard-1fcaf00faebc) on how to setup http proxy and generate a certificate and a key:
```bash
  openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem
```
and run `node proxy.js` file that you created following the tutorial above.
Run `yarn start` to start the front-end. Now you can open your browser at http://localhost:8081/index.html (first start will take some time).
