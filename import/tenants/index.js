var tenants = [
	{
		"_id": '58bd20bc06f3698ba308dc18',
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
						"key": "0e379751d5dda1952d64022bae2324dd",
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
		"_id": '58bd22ef06f3698ba308dc19',
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
						"key": "3e448a272922fdb43f3d929940665ce2",
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
		"_id": '58bd234e06f3698ba308dc1a',
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
						"key": "dc67afb5a31d9ae13c0ad6e2001cf87d",
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
		"_id": '58bd239506f3698ba308dc1b',
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
						"key": "3417d6117caf342da1128c7fa1bc2095",
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
		"_id": '58bd23aa06f3698ba308dc1c',
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
						"key": "5e3219ee6f9aa9a96e8bc2d1e4fa3e80",
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