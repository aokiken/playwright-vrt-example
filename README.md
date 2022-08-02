# playwright-vrt-example

# Dockerでupdate-snapshotsを実行する
```shell
$ docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.24.0-focal /bin/bash
$ npm install
$ npx playwright test --update-snapshots
```
