var config = {
    "environment": "stage",
    "statsd": {
        "host": "graphite.infra.systems",
        "prefix": "hyuna.api.email.",
        "suffix": ".stage",
        "cacheDns": true
    },
    "sequelize": {
        "jomedia": {
            "benchmark": false,
            "write": {
                "logging": false,
                "host": "staging-db-master.infra.systems",
                "port": 3306,
                "username": "email_api_rw",
                "password": "{{ pillar['mysql-main']['staging']['password']['email_api_rw'] }}",
                "database": "jomedia",
                "dialect": "mysql",
                "dialectOptions": {
                    "ssl": {
                        "caFile": "/etc/jomedia/mysql-certs/ca-cert.pem",
                        "rejectUnauthorized": false
                    }
                },
				"pool": {
					"max": 10,
					"min": 5,
					"idle": 10000
				},
            },
            "read": {
                "logging": false,
                "host": "staging-db-master.infra.systems",
                "port": 3306,
                "username": "email_api_ro",
                "password": "{{ pillar['mysql-main']['staging']['password']['email_api_ro'] }}",
                "database": "jomedia",
                "dialect": "mysql",
                "dialectOptions": {
                    "ssl": {
                        "caFile": "/etc/jomedia/mysql-certs/ca-cert.pem",
                        "rejectUnauthorized": false
                    }
                },
				"pool": {
					"max": 10,
					"min": 5,
					"idle": 10000
				},
            }
        }
    },
    "cluster": {
        "masterConfig": {
            "appName": "Email API",
            "port": 8821,
            "limitReqSize": "100mb"
        },
        "workerConfig": {
            "port": 8822,
            "env": "stage"
        }
    },
    "cakemail": {
        "email": "it-suppliers@jomediainc.com",
        "password": "{{ pillar['hyuna_api_email']['stage']['cakemail']['password'] }}",
        "apiKey": "{{ pillar['hyuna_api_email']['stage']['cakemail']['apiKey'] }}",
        "baseUrl": "https://api.wbsrvc.com"
    },
    "ad-center-api": {
        "endpoint": "http://stage1-2031a1.infra.systems",
        "secret": "{{ pillar['hyuna_api_email']['stage']['ad-center-api']['secret'] }}",
        "apiVersion": "v1",
        "services": {
            "companies": "companies",
            "sites.find_by_domain": "sites/{domain_name}",
            "sites.find": "sites/{site_id}",
            "companies.find": "companies/{id}"
        }
    }
};

module.exports = config;