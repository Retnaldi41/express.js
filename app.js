const express = require('express');
const cors = require('cors')
// const path = require('path')

const app = express();

// app.use("/public", express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.json());


const port = 3000;
// Require all routes booking
const bookingRoutes = require('./src/booking/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/booking', bookingRoutes);
// app.use('/income', incomeRoutes);

// Require all routes client
const clientRoutes = require('./src/client/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/client', clientRoutes);
// app.use('/income', incomeRoutes);

// Require all routes pembatalan
const pembatalanRoutes = require('./src/pembatalan/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/pembatalan', pembatalanRoutes);
// app.use('/income', incomeRoutes);

// Require all routes rescheduling
const reschedulingRoutes = require('./src/rescheduling/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/rescheduling', reschedulingRoutes);
// app.use('/income', incomeRoutes);

// Require all routes agenda
const agendaRoutes = require('./src/agenda/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/agenda', agendaRoutes);
// app.use('/income', incomeRoutes);

// Require all routes agenda
const cosplayRoutes = require('./src/foto_cosplay/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/cosplay', cosplayRoutes);
// app.use('/income', incomeRoutes);

// Require all routes agenda
const groupRoutes = require('./src/foto_group/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/group', groupRoutes);
// app.use('/income', incomeRoutes);

// Require all routes agenda
const komersialRoutes = require('./src/foto_komersial/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/komersial', komersialRoutes);
// app.use('/income', incomeRoutes);

// Require all routes agenda
const potraitRoutes = require('./src/foto_potrait/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/potrait', potraitRoutes);
// app.use('/income', incomeRoutes);

// Require all routes agenda
const studioRoutes = require('./src/foto_studio/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/studio', studioRoutes);
// app.use('/income', incomeRoutes);

// Require all routes agenda
const weddingRoutes = require('./src/foto_wedding/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/wedding', weddingRoutes);
// app.use('/income', incomeRoutes);

// Require all routes user
const userRoutes = require('./src/user/routes')
// const incomeRoutes = require('./src/income/routes')
// List of Routes
app.use('/users', userRoutes);
// app.use('/income', incomeRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})