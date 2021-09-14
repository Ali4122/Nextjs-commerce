const valid = (name, email, password, cf_password) => {
    if(!name || !email || !password)
    return "Iltimos, barcha maydonlarni to'ldiring."

    if(!validateEmail(email))
    return "Elektron manzil noto'g'ri."

    if(password.length < 6)
    return "Parol kamida 6 ta belgidan iborat bo'lishi kerak."

    if(password !== cf_password)
    return 'Parol mos kelmadi.'
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default valid