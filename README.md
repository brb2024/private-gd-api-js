# JavaScript Geometry Dash API

An Express - JS API for interact easyly with the Geometry Dash servers, using JSON format.

## API

|Endpoint|Parameter|Type|
|:-------|:--------|:---|
|`/getGJUsers20`|`userName`|`string`|
|`/getGJUserInfo20`|`userID`|`string`|

### Example

Send a post request to `/getGJUsers20` with curl.

```sh
curl -X POST localhost:8081/getGJUsers20 -H "Content-Type:application/json" -d "{\"userName\": \"xstaticstorm\"}"
```

### Response

```
1:xstaticstorm:2:56164893:13:163:17:2831:6:0:9:394:10:12:11:0:14:0:15:0:16:7843252:3:20232:52:211:8:10:4:1029#999:0:10
```