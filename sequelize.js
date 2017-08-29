var dbModels = require('./models')




dbModels.emailTemplate.create({
    template_name: 'test',
    template_variation: 'test',
    template_string: 'test',
    variables: 'test'
}).then(function(data){
    console.log(data)
})