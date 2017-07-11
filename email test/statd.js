Statsd = require("node-statsd")
statsd = new Statsd()

statsd.increment('warren_test')