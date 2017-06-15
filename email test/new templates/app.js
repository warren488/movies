/* app.js */
var ejs = require("ejs");
// require and instantiate express
const app = require('express')()
const ejsLint = require('ejs-lint');


// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  console.log('::posts')
  console.log(posts)
  res.render('home', { posts: posts })
})

app.get('/trial_geeker', (req, res) => { // Cleaned payload object
  ejs.renderFile("./views/trial_geeker.ejs", {
    "$phone": "555-555-5555",
    "$secondary_phone": "444-444-4444",
    "$site_name": "geeker",
    "$first_name": "Mason",
    "$last_name": "Johnson",
    "$email": "mason.johnson@geeker.com",
    "$member_id": 89621694654,
    "$recurring_amount": "34.89",
    "$date": "May 29 2017",
    "$trial_period": "5 day free trial",
    "$domain_name": "geeker.com",
    "$days_before_expiration": 5,
    "$concatenated_phone": "555-555-5555/444-444-4444",
    "$member_key": 89621694654

    }, function(err, rendered_template){
    if(err){
      console.log(err)
      res.send(500, "ejs error")
      return
    }

    res.send(201, rendered_template);
  })
})

app.get('/premium_geeker', (req, res) => {
  ejs.renderFile("./views/premium_geeker.ejs", {
    "$phone": "555-555-5555",
    "$secondary_phone": "444-444-4444",
    "$site_name": "geeker",
    "$first_name": "Mason",
    "$last_name": "Johnson",
    "$email": "mason.johnson@geeker.com",
    "$member_id": 89621694654,
    "$membership_expiry_date": "May 29 2017",
    "$billing_date": "May 29 2017",
    "$trial_period": "5 day free trial",
    "$domain_name": "geeker.com",
    "$membership_name": "1 Month Membership",
    "$membership_type": "Premium",
    "$recurring_amount": "1.00",
    "$unit": "1 month",
    "$initial_amount": 0.00,
    "$unicef_charged": true,
    "$subtotal": "9.95",
    "$total": "9.95",
    "$days_before_expiration": 5,
    "$concatenated_phone": "555-555-5555/444-444-4444",
    "$card_type": "MasterCard",
    "$card_expiration_date": "08/23",
    "$password": "12***********",
    "$zip_code": 12223,
    "$join_date": "May 29 2017",
    "$country_code": "US",
    "$order_total": "0.00",

    }, function(err, rendered_template){
    if(err){
      console.log(err)
      res.send(500, "ejs error")
      return
    }

    res.send(201, rendered_template);
  })
})

app.get('/media_membership_geeker', (req, res) => { // Cleaned payload object
  ejs.renderFile("./views/media_membership_geeker.ejs", {
    "$phone": "555-555-5555",
    "$secondary_phone": "444-444-4444",
    "$site_name": "geeker",
    "$first_name": "Mason",
    "$last_name": "Johnson",
    "$email": "mason.johnson@geeker.com",
    "$membership_expiry_date": "May 29 2017",
    "$join_date": "May 29 2017",
    "$domain_name": "geeker.com",
    "$membership_name": "1 Month Membership",
    "$membership_type": "Premium",
    "$recurring_amount": "1.00",
    "$unit": "1 month",
    "$initial_amount": 0.00,
    "$unicef_charged": true,
    "$subtotal": "9.95",
    "$total": "9.95",
    "$days_before_expiration": 5,
    "$concatenated_phone": "555-555-5555/444-444-4444",
    "$billing_date": "May 29 2017",
    "$card_type": "MasterCard",
    "$card_expiration_date": "08/23",
    "$password": "12***********",
    "$zip_code": 12223,
    "$country_code": "US",
    "$member_id": 89621694654,
    "$order_total": "0.00"

    }, function(err, rendered_template){
    if(err){
      console.log(err)
      res.send(500, "ejs error")
      return
    }

    res.send(201, rendered_template);
  })
})

app.get('/trial', (req, res) => { // Cleaned payload object
  ejs.renderFile("./views/trial.ejs", {
    "$phone": "555-555-5555",
    "$secondary_phone": "444-444-4444",
    "$site_name": "geeker",
    "$first_name": "Mason",
    "$last_name": "Johnson",
    "$email": "mason.johnson@geeker.com",
    "$membership_expiry_date": "May 29 2017",
    "$join_date": "May 29 2017",
    "$domain_name": "geeker.com",
    "$membership_name": "1 Month Membership",
    "$membership_type": "Premium",
    "$recurring_amount": "1.00",
    "$unit": "1 month",
    "$initial_amount": 0.00,
    "$unicef_charged": true,
    "$subtotal": "9.95",
    "$total": "9.95",
    "$days_before_expiration": 5,
    "$concatenated_phone": "555-555-5555/444-444-4444",
    "$billing_date": "May 29 2017",
    "$card_type": "MasterCard",
    "$card_expiration_date": "08/23",
    "$password": "12***********",
    "$zip_code": 12223,
    "$country_code": "US",
    "$member_id": 89621694654,
    "$order_total": "0.00",
    "$extra_message": "",
    "$is_aw": true,
    "$descriptor": "89621694654-geeker",
    "$has_recurring_transactions": true

    }, function(err, rendered_template){
    if(err){
      console.log(err)
      res.send(500, "ejs error")
      return
    }

    res.send(201, rendered_template);
  })
})

app.get('/premium', (req, res) => { // Cleaned payload object
  ejs.renderFile("./views/premium.ejs", {
    "$phone": "555-555-5555",
    "$secondary_phone": "444-444-4444",
    "$site_name": "geeker",
    "$first_name": "Mason",
    "$last_name": "Johnson",
    "$email": "mason.johnson@geeker.com",
    "billing_date": "May 29 2017",
    "$join_date": "May 29 2017",
    "$trial_period": "5 day free trial",
    "$domain_name": "geeker.com",
    "$membership_name": "1 Month Membership",
    "$membership_type": "Premium",
    "$unit": "1 month",
    "$initial_amount": 0.00,
    "$unicef_charged": true,
    "$subtotal": "9.95",
    "$total": "9.95",
    "$billing_date": "May 29 2017",
    "$card_type": "MasterCard",
    "$card_expiration_date": "08/23",
    "$password": "12***********",
    "$zip_code": 12223,
    "$country_code": "US",
    "$member_id": 89621694654,
    "$order_total": "0.00",
    "$currency_symbol": "$",
    "$extra_message": "",
    "$is_aw": true,
    "$descriptor": "89621694654-geeker",
    "$isHighTrafficSite": false,
    "$facebookLinkAvailable": false

    }, function(err, rendered_template){
    if(err){
      console.log(err)
      res.send(500, "ejs error")
      return
    }

    res.send(201, rendered_template);
  })
})

app.get('/media_membership', (req, res) => {
  ejs.renderFile("./views/media_membership.ejs", {
    "$phone": "555-555-5555",
    "$secondary_phone": "444-444-4444",
    "$site_name": "geeker",
    "$first_name": "Mason",
    "$last_name": "Johnson",
    "$email": "mason.johnson@geeker.com",
    "$membership_expiry_date": "May 29 2017",
    "$join_date": "May 29 2017",
    "$trial_period": "5 day free trial",
    "$domain_name": "geeker.com",
    "$membership_name": "1 Month Membership",
    "$membership_type": "Premium",
    "$recurring_amount": "1.00",
    "$unit": "1 month",
    "$initial_amount": 0.00,
    "$unicef_charged": true,
    "$subtotal": "9.95",
    "$total": "9.95",
    "$concatenated_phone": "555-555-5555/444-444-4444",
    "$billing_date": "May 29 2017",
    "$card_type": "MasterCard",
    "$card_expiration_date": "08/23",
    "$password": "12***********",
    "$zip_code": 12223,
    "$country_code": "US",
    "$member_id": 89621694654,
    "$order_total": "0.00",
    "$is_aw": true,
    "$descriptor": "89621694654-geeker"

    }, function(err, rendered_template){
    if(err){
      console.log(err)
      res.send(500, "ejs error")
      return
    }

    res.send(201, rendered_template);
  })
})

app.listen(8080)

console.log('listening on port 8080')
