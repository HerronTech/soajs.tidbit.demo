// on DELETE "System api access is restricted. api is not in provision."

var deleteBanned = {
	"javaservice": {
		"access": false,
		"apisPermission": "restricted",
		"put": {
			"apis": {
				"/tidbit/hello": {}
			}
		},
		"get": {
			"apis": {
				"/tidbit/hello": {}
			}
		},
		"post": {
			"apis": {
				"/tidbit/hello": {}
			}
		}
	}
};

/*
 {
 "code": 159,
 "message": "System api access is restricted. api is not in provision."
 }
 */

var publicAccessForAllApis = {
	"hapiservice": {
		"access": false
	}
};
/*
 {
 "message": "Hello, I am a HAPI service, you are [etienne] and your last name is : [daher]"
 }
 
 {
 "geo": {
 "ip": "127.0.0.1"
 },
 "servicesConfig": {},
 "urac": null,
 "device": "PostmanRuntime/2.4.5",
 "tenant": {
 "code": "DBTN",
 "application": {
 "product": "DSBRD",
 "package": "DSBRD_MAIN",
 "package_acl": null,
 "appId": "5512926a7a1f0e2123f638de",
 "acl_all_env": null,
 "acl": null,
 "package_acl_all_env": null
 },
 "id": "5551aca9e179c39b760f7a1a",
 "key": {
 "eKey": "d44dfaaf1a3ba93adc6b3368816188f96134dfedec7072542eb3d84ec3e3d260f639954b8c0bc51e742c1dff3f80710e3e728edb004dce78d82d7ecd5e17e88c39fef78aa29aa2ed19ed0ca9011d75d9fc441a3c59845ebcf11f9393d5962549",
 "iKey": "38145c67717c73d3febd16df38abf311"
 }
 }
 }
 
 */


// express // ASK MIKE OR TONY for oauth access token error -----------

var blockAllapis = {
	"phpservice": {
		"access": true,
		"apisPermission": "restricted"
	},
};

/*
 {
 "code": 400,
 "message": "The access token was not found"
 }
 */

/*
 {
 "code": 159,
 "message": "System api access is restricted. api is not in provision."
 }
 */

var block1Api = {
	
};


/*
 {
 "message": "Hello, I am an EXPRESS service, you are [undefined] and your last name is : [undefined]"
 }
 */