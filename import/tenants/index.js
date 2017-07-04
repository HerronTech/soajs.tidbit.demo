var tenants = [
	{
		"type": "client",
		"code": "TID1",
		"name": "TIDBIT 1",
		"description": "This tenant will use package 1 which gives access to all APIs and have service config 1",
		"oauth": {},
		"applications": [
			{
				"product": "DEV",
				"package": "TIDDEV_PACK1",
				"appId": '58bd240606f3698ba308dc21',
				"description": null,
				"_TTL": 21600000,
				"keys": [
					{
						"key": "c36e5d3dc3bbde5b8319bb6f1d2f89ed",
						"extKeys": [
							{
								"extKey": "",
								"device": {},
								"geo": {},
								"env": "DEV"
							}
						],
						"config": {
							"dev": {
								"commonFields":{
									"data": "This is service config 1"
								}
							}
						}
					}
				]
			}
		]
	},
	{
		"type": "client",
		"code": "TID2",
		"name": "TIDBIT 2",
		"description": "This tenant will use package 1 which gives access to all APIs and have service config 2",
		"oauth": {},
		"applications": [
			{
				"product": "DEV",
				"package": "TIDDEV_PACK1",
				"appId": '58bd23fc06f3698ba308dc20',
				"description": null,
				"_TTL": 21600000,
				"keys": [
					{
						"key": "bb862e400663753f6bb53c7b894fc51c",
						"extKeys": [
							{
								"extKey": "",
								"device": {},
								"geo": {},
								"env": "DEV"
							}
						],
						"config": {
							"dev": {
								"commonFields":{
									"data": "This is service config 2"
								}
							}
						}
					}
				]
			}
		]
	},
	{
		"type": "client",
		"code": "TID3",
		"name": "TIDBIT 3",
		"description": "This tenant will use package 2 which gives access to the post API only and have service config 3",
		"oauth": {},
		"applications": [
			{
				"product": "DEV",
				"package": "TIDDEV_PACK2",
				"appId": '58bd23f406f3698ba308dc1f',
				"description": null,
				"_TTL": 21600000,
				"keys": [
					{
						"key": "c05ff3faf3456547c60386a339a41db8",
						"extKeys": [
							{
								"extKey": "",
								"device": {},
								"geo": {},
								"env": "DEV"
							}
						],
						"config": {
							"dev": {
								"commonFields":{
									"data": "This is service config 3"
								}
							}
						}
					}
				]
			}
		]
	},
	{
		"type": "client",
		"code": "TID4",
		"name": "TIDBIT 4",
		"description": "This tenant will use package 2 which gives access to the post API only and have service config 4",
		"oauth": {},
		"applications": [
			{
				"product": "DEV",
				"package": "TIDDEV_PACK2",
				"appId": '58bd23e806f3698ba308dc1e',
				"description": null,
				"_TTL": 21600000,
				"keys": [
					{
						"key": "325be1276b7c6479b2ff874e8628a416",
						"extKeys": [
							{
								"extKey": "",
								"device": {},
								"geo": {},
								"env": "DEV"
							}
						],
						"config": {
							"dev": {
								"commonFields":{
									"data": "This is service config 4"
								}
							}
						}
					}
				]
			}
		]
	},
	{
		"type": "client",
		"code": "TID5",
		"name": "TIDBIT 5",
		"description": "This tenant will use package 2 which gives access to the post API, however, its acl is overriden and the get API is also available. And it have service config 5",
		"oauth": {},
		"applications": [
			{
				"product": "DEV",
				"package": "TIDDEV_PACK2",
				"appId": '58bd23dd06f3698ba308dc1d',
				"description": null,
				"_TTL": 21600000,
				"keys": [
					{
						"key": "10c4f67eab523fdfba900dea5480947c",
						"extKeys": [
							{
								"extKey": "",
								"device": {},
								"geo": {},
								"env": "DEV"
							}
						],
						"config": {
							"dev": {
								"commonFields":{
									"data": "This is service config 5"
								}
							}
						}
					}
				],
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
				}
			}
		]
	}
];

module.exports = tenants;