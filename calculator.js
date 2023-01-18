const express = require('express')
const bodyParser = require('body-parser') // npm list -g

const app = express()
app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function(){
	console.log('Server running at port 3000')
})






app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){
	// console.log(req.body)
	let a = parseInt(req.body.num1)
	let b = parseInt(req.body.num2)
	// let sum = ''+(a+b) // mark = xx33
	let sum = a+b

	// res.send('Thanks for posting.')
	// console.log(sum)

	// res.send(sum) // mark = xx33
	res.send('Summation = ' + sum)
})







app.get('/bmi-cal', function(req, res){
	res.sendFile(__dirname + '/bmi-calculator.html')
})

app.post('/bmi-cal', function(req, res){
	let height = parseFloat(req.body.height)
	let weight = parseFloat(req.body.weight)

	let bmi = (weight/Math.pow(height, 2)).toFixed(2)

	res.send('Your BMI is: ' + bmi)
})







