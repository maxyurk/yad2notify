# Yad2Notify

Get pushbullet notifications on new yad2 advertisements.


## Getting Started

### instructions

1. [download & install node 8+ & npm](https://nodejs.org/en/download/)
2. create a [pushbullet](pushbullet.com) account
3. install pushbullet app on your [android](https://play.google.com/store/apps/details?id=com.pushbullet.android) or [iOS](https://itunes.apple.com/us/app/pushbullet/id810352052) device & login
4. `git clone https://github.com/maxyurk/yad2notify.git`
5. `cd yad2notify`
6. `npm install --only=production`
7. go to [pushbullet settings](https://www.pushbullet.com/#settings), click on `Create Access Token` and copy the token
8. edit `config.js` -> paste token to `pushbulletAccessTokens` value
9. search yad2 for whatever you need and copy the link of the page
10. edit `config.js` -> paste link to `url` value 
11. `npm start`


## Running the tests

`npm test`

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/maxyurk/yad2notify/tags). 

## Authors

* **maxyurk** - *Initial work* - [maxyurk](https://github.com/maxyurk)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
