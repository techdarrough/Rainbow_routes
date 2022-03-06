require('dotenv').config()
const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.send(`
    <body style="margin: 0;">
    <div style="border: 1px solid black; height: 10vh; background-color: white;">
        <h2 style="text-align: center;">NAV BAR</h2>
    </div>
    <h1>White Page</h1>
</body>
    `)
})

// Color Page
app.get('/:color',  (req, res) => {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor.charAt().toUpperCase() + myColor.slice(1)} Page</h1>
        </body>
    `)
})


app.listen(process.env.PORT, () => {
    console.log(`listen on port ${process.env.PORT}`)
})


