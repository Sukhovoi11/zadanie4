const fs = require('fs');
const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Aplikacja działa na porcie ${PORT}`);
});
app.post('/student', (req, res) => {
    const { code, name, lastname, gender, age, studyField } = req.body;


    const data = `Numer albumu: ${code}\nImię: ${name}\nNazwisko: ${lastname}\nPłeć: ${gender}\nWiek: ${age}\nKierunek: ${studyField}`;
    const fileName = `${code}.txt`;

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Błąd zapisu do pliku:', err);
            res.status(500).send('Wystąpił błąd podczas zapisywania danych.');
        } else {
            console.log('Dane zostały zapisane do pliku:', fileName);

            res.render('student', { title: 'Profil studenta', code, name, lastname, gender, age, studyField });
        }
    });
});
