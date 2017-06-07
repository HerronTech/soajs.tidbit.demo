var devProducts = {
	"code": "DEV",
	"name": "Dev Product",
	"description": "This is a product for a demo",
	"packages": [
		{
			"code": "DEV_PACK1",
			"name": "Package 1",
			"description": "This package is admin. It contains 2 public APIs: get & post for each service (hapi,java & express)",
			"acl": {
				"dev": {
					"express": {
						"access": false
					},
					"hapi": {
						"access": false
					},
					"java": {
						"access": false
					}
				}
			},
			"_TTL": 21600000
		},
		{
			"code": "DEV_PACK2",
			"name": "Package 2",
			"description": "This package have access to 1 API: post. Get is restricted",
			"acl": {
				"dev": {
					"express": {
						"access": false,
						"apisPermission": "restricted",
						"post": {
							"apis": {
								"/tidbit/hello": {
									"access": false
								}
							}
						},
					},
					"hapi": {
						"access": false,
						"apisPermission": "restricted",
						"post": {
							"apis": {
								"/tidbit/hello": {
									"access": false
								}
							}
						},
					},
					"java": {
						"access": false,
						"apisPermission": "restricted",
						"post": {
							"apis": {
								"/tidbit/hello": {
									"access": false
								}
							}
						},
					}
				}
			},
			"_TTL": 21600000
		}
	]
};

module.exports = devProducts;